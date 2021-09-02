import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Responses from './assets/convertcsv.json';

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

// Transform data into good values
const formattedResponses = Responses.map((old) => {
  return {
    courseCode: old['Which COMP elective will you be giving your opinion on?'].toUpperCase().slice(0, 8),
    timestamp: old.Timestamp,
    termTaken: old['When did you do this course?'],
    author: old['Email address'],
    displayAuthor: false,
    rating: {
      difficulty: safeParseInt(old['How difficult did you find this course (in terms of content)?'][0]),
      workload: safeParseInt(old['How did you find the workload?'][0]),
      enjoyment: safeParseInt(old['How much did you enjoy this course?'][0]),
      usefulness: safeParseInt(old['How useful did you find this course?'][0]),
      overall: safeParseInt(old['Overall rating'][0]),
    },
    comment: parseComment(old),
    recommendedCourses: old['Any similar courses you think people would enjoy if they liked this course?'], // TODO
  };
});
console.log(formattedResponses);

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
