import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Responses from './assets/convertcsv.json';
import CourseData from './assets/coursesFormattedRaw.json';

import { initializeApp } from 'firebase/app';
import FirebaseConfig from './assets/firebase-config.json';
import { getDocs, getFirestore, collection, doc, setDoc } from 'firebase/firestore';

const safeParseInt = (str) => {
  const num = parseInt(str, 10);
  if (isNaN(num)) {
    console.log('!!!!!ERROR! cannot parse', str);
  }
  return num;
};

const parseComment = (old) => {
  let com = '';
  if (old['What did you like about this course?']) {
    com = com + `What did you like about the course? ${old['What did you like about this course?']}\n\n`;
  }
  if (old['What didn\'t you like about this course?']) {
    com = com + `What didn't you like about this course? ${old['What didn\'t you like about this course?']}\n\n`;
  }
  if (old['Any pain points or things to note?']) {
    com = com + `Any pain points or things to note? ${old['Any pain points or things to note?']}\n\n`;
  }
  if (old['General comments']) {
    com = com + `General comments? ${old['General comments']}\n\n`;
  }

  if (!com) {
    console.log('!!!!!ERROR! FOUND EMPTY COMMENT');
  }

  return com.trim();
};

const parseRecommended = (cc, old) => {
  const recString = old['Any similar courses you think people would enjoy if they liked this course?'];
  const courseCodes = [...recString.matchAll(/[A-Z]{4}\d{4}/g)].map((match) => match[0]);
  return courseCodes;
};

const parseTerms = (cc, terms) => {
  if (terms === '') return [];
  return terms.split(',').map((term) => {
    const comp = term.trim();
    if (comp === 'Summer Term') return 0;
    if (comp === 'Term 1') return 1;
    if (comp === 'Term 2') return 2;
    if (comp === 'Term 3') return 3;
    console.log('invalid term???', cc, comp);
    return -1;
  });
};

const parseTimestamp = (timestampStr) => {
  const [date, time] = timestampStr.split(' ');
  const properStr = `${date.split('/').reverse().join('/')} ${time}`;
  return new Date(properStr).getTime();
};

const parseHtml = (cc, desc) => {
  const dummyHtml = document.createElement('div');
  dummyHtml.innerHTML = desc;
  return dummyHtml.textContent;
  // return desc
  //   .replaceAll(/<.*?>/g, '')
  //   .replaceAll(/&#39;/g, '\'')
  //   .replaceAll(/&#34;/g, '"')
  //   .replaceAll(/&#43;/g, '+')
  //   .replaceAll(/&#61;/g, '=')
  //   .replaceAll(/ +/g, ' ');
};

// Transform data into good values
const formattedResponses = Responses.map((old) => {
  const cc = old['Which COMP elective will you be giving your opinion on?'].toUpperCase().slice(0, 8);
  return {
    courseCode: old['Which COMP elective will you be giving your opinion on?'].toUpperCase().slice(0, 8),
    timestamp: parseTimestamp(old.Timestamp),
    termTaken: old['When did you do this course?'],
    author: old['Email address'].split('@')[0],
    displayAuthor: false,
    rating: {
      difficulty: safeParseInt(old['How difficult did you find this course (in terms of content)?'][0]),
      workload: safeParseInt(old['How did you find the workload?'][0]),
      enjoyment: safeParseInt(old['How much did you enjoy this course?'][0]),
      usefulness: safeParseInt(old['How useful did you find this course?'][0]),
      overall: safeParseInt(old['Overall rating'][0]),
    },
    comment: parseComment(old),
    recommendedCourses: parseRecommended(cc, old),
  };
});
// console.log(formattedResponses);
// console.log(formattedResponses.map((x) => x.timestamp));
// formattedResponses contains each review object....

const relevantCourses = {};
for (const unswCourse of Object.values(CourseData)) {
  // if (!unswCourse.school?.includes('Computer Science and Engineering') && unswCourse.gen_ed !== 'true') continue;
  if (!unswCourse.school?.includes('Computer Science and Engineering')) continue;
  if (unswCourse.terms.includes('Semester') || unswCourse.terms.includes('Canberrra')) continue;
  if (unswCourse.calendar === 'Semester') continue;
  relevantCourses[unswCourse.code] = {
    ...unswCourse,
    courseCode: unswCourse.code,
    uoc: parseInt(unswCourse.UOC, 10) || 0,
    level: parseInt(unswCourse.level, 10) || safeParseInt(unswCourse.code[4], 10) || 0,
    terms: parseTerms(unswCourse.code, unswCourse.terms),
    genEd: unswCourse.gen_ed === 'true' ? true : false,
    enrolmentRules: parseHtml(unswCourse.code, unswCourse.enrolment_rules),
    description: parseHtml(unswCourse.code, unswCourse.description),
    school: unswCourse.school || '',
    fieldOfEducation: unswCourse.field_of_education,
    studyLevel: unswCourse.study_level,
  };
  delete relevantCourses[unswCourse.code].code;
  delete relevantCourses[unswCourse.code].UOC;
  delete relevantCourses[unswCourse.code].enrolment_rules;
  delete relevantCourses[unswCourse.code].gen_ed;
  delete relevantCourses[unswCourse.code].field_of_education;
  delete relevantCourses[unswCourse.code].study_level;
  delete relevantCourses[unswCourse.code].enrolment_rules;
}
// console.log('relevant courses', relevantCourses);
// console.log(Object.values(relevantCourses).filter((x) => Object.keys(x).length !== 17));
// console.log(Object.values(relevantCourses).map((x) => Object.keys(x).length));

const thingToUpload = {};
Object.values(relevantCourses).forEach((c) => {
  if (!(c.courseCode in thingToUpload)) {
    thingToUpload[c.courseCode] = { ...c, reviews: [] };
  }
});

formattedResponses.forEach((r) => {
  if (!(r.courseCode in thingToUpload)) {
    console.log(r.courseCode, 'NOT FOUND IN FORMATTED JSON');
    return;
  }

  thingToUpload[r.courseCode].reviews.push(r);
});

console.log('uploading', thingToUpload);

// const db = getFirestore(initializeApp(FirebaseConfig));
// for (const upload of Object.values(thingToUpload)) {
//   console.log(upload);
//   const ref = doc(db, 'courses', upload.courseCode);
//   // setDoc(ref, upload);
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
