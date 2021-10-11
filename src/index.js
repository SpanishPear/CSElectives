import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Responses from './assets/convertcsv.json';
import CourseData from './assets/coursesFormattedRaw.json';

import { initializeApp } from 'firebase/app';
import FirebaseConfig from './assets/firebase-config.json';
import Database from './db/db.js';
import { getDocs, getFirestore, collection, doc, setDoc, addDoc } from 'firebase/firestore';
import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';

const db = getFirestore(initializeApp(FirebaseConfig));

const majors = {
  'Artifical Intelligence': ['COMP3431', 'COMP4418', 'COMP9318', 'COMP9417', 'COMP9418', 'COMP9444', 'COMP9517'],
  'Computer Networks': ['COMP4336', 'COMP4337', 'COMP6733', 'COMP9332', 'COMP9334'],
  'Database Systems': ['COMP6714', 'COMP9313', 'COMP9315', 'COMP9318', 'COMP9319'],
  'eCommerce Systems': ['COMP3511', 'COMP9321', 'COMP9322', 'COMP9323'],
  'Programming Languages': ['COMP3131', 'COMP3141', 'COMP3151', 'COMP6771'],
  'Security Engineering': [
    'COMP4337', 'COMP6443', 'COMP6445', 'COMP6447', 'COMP6448',
    'COMP6449', 'COMP6843', 'COMP6845', 'COMP9447', 'MATH3411', 'TELE3119',
  ],
};

const upload = {
  'COMPI1': {
    title: 'Artifical Intelligence',
    courses: ['COMP3431', 'COMP4418', 'COMP9318', 'COMP9417', 'COMP9418', 'COMP9444', 'COMP9517'],
  },
  'COMPN1': {
    title: 'Computer Networks',
    courses: ['COMP4336', 'COMP4337', 'COMP6733', 'COMP9332', 'COMP9334'],
  },
  'COMPD1': {
    title: 'Database Systems',
    courses: ['COMP6714', 'COMP9313', 'COMP9315', 'COMP9318', 'COMP9319'],
  },
  'COMPE1': {
    title: 'eCommerce Systems',
    courses: ['COMP3511', 'COMP9321', 'COMP9322', 'COMP9323'],
  },
  'COMPJ1': {
    title: 'Programming Languages',
    courses: ['COMP3131', 'COMP3141', 'COMP3151', 'COMP6771'],
  },
  'COMPY1': {
    title: 'Security Engineering',
    courses: [
      'COMP4337', 'COMP6443', 'COMP6445', 'COMP6447', 'COMP6448',
      'COMP6449', 'COMP6843', 'COMP6845', 'COMP9447', 'MATH3411', 'TELE3119',
    ],
  },
};

const doSomething = async () => {
  // const courses = await Database.getCoursesAndReviews();
  // console.log(courses);
  // eslint-disable-next-line guard-for-in
  // for (const code in upload) {
  //   await Database.temp(upload[code], 'majors', code);
  // }
  // await Database.temp(upload, 'majors');
};
doSomething();

// const uploadToDatabase = async (thingToUpload) => {
//   const reviewsCol = collection(db, 'reviews');
//   const reviewSnapshot = await getDocs(reviewsCol);

//   console.log(reviewSnapshot);

//   reviewSnapshot.docs.forEach((doc) => {
//     const reviewId = doc.id;
//     const review = doc.data();
//     if (!(review.courseCode in thingToUpload)) {
//       console.log(review.courseCode, 'NOT FOUND IN FORMATTED JSON');
//       return;
//     }
//     thingToUpload[review.courseCode].reviews.push(reviewId);
//   });

//   console.log('uploading', thingToUpload);

//   // UPLOAD
//   // for (const upload of Object.values(thingToUpload)) {
//   //   console.log(upload);
//   //   const ref = doc(db, 'courses', upload.courseCode);
//   //   // setDoc(ref, upload);
//   // }
// };
// uploadToDatabase(thingToUpload);


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <h1>BoO</h1>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
