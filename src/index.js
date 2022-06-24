import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './components/Main';
import Interview from './components/Interview';
import ObservationsDemoQuant from './components/ObservationsDemoQuant';
import ObservationsQual from './components/ObservationsQual';
import MethInterviewProcedures from './components/MethInterviewProcedures';
import MethMisc from './components/MethMisc';
import MethQuestionDesign from './components/MethQuestionDesign';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/interview" element={<Interview/>}/>
        <Route path="/observations_qualitative" element={<ObservationsQual/>}/>
        <Route path="/observations_quantitative" element={<ObservationsDemoQuant/>}/>
        <Route path="/methodology_interview_procedures" element={<MethInterviewProcedures/>}/>
        <Route path="/methodology_question_design" element={<MethQuestionDesign/>}/>
        <Route path="/methodology_miscellaneous" element={<MethMisc/>}/>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
