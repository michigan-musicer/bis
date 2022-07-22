import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Main from './components/Main';
import InterviewGuard from './components/InterviewGuard';
import ObservationsDemo from './components/ObservationsDemo';
import ObservationsQual from './components/ObservationsQual';
import ObservationsLimits from './components/ObservationsLimits';
import MethInterviewProcedures from './components/MethInterviewProcedures';
import MethMisc from './components/MethMisc';
import MethQuestionDesign from './components/MethQuestionDesign';
import MethCitations from './components/MethCitations';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// const interviews = [
//   {
//     "id": 0,
//     "name": "John Smith",
//     "speciality": "Wizard"
//   },
//   {
//     "id": 1,
//     "name": "Crag Hack",
//     "speciality": "Viking"
//   },
//   {
//     "id": 2,
//     "name": "Silvio",
//     "speciality": "Warrior"
//   }
// ];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* {interviews.map(interview => (<Link to={'/interview/' + interview.id} />)} */}
      <Routes>
        {/* <Route path="/interview" element={<InterviewBase/>} />   */}
        {/* <Route path="/interview/:name" element={<Interview/>}/> */}
        <Route path="/interview/:name" element={<InterviewGuard/>}/>
        <Route path="/observations_qualitative" element={<ObservationsQual/>}/>
        <Route path="/observations_demographic" element={<ObservationsDemo/>}/>
        <Route path="/observations_limitations" element={<ObservationsLimits/>}/>
        <Route path="/methodology_interview_procedures" element={<MethInterviewProcedures/>}/>
        <Route path="/methodology_question_design" element={<MethQuestionDesign/>}/>
        <Route path="/methodology_miscellanea" element={<MethMisc/>}/>
        <Route path="/methodology_citations" element={<MethCitations/>}/>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
