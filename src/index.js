/**
 * @version: 1.0
 * @author: Aayush Prakash Budania <aayushbudania002@gmail.com>
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
//  PROJECT OVERVIEW:                                                                                      //
//  # The Assignment is associated with Springwood Digital Labs Pvt. Ltd.                                  //
//  # Created By: Aayush Prakash Budania (Ph. no:6375659484, college email: 19ucs161@lnmiit.ac.in)         //
//    Roll No:    19ucs161                                                                                 //
//  # I have developed the assignment by considering students of LNMIIT which can register in the system.  //
//  # Tasks: 1) Register Page: Student can register in the system by providing                             //
//                             details like name, email, phone number, year and branch.                    //
//                             Student details are stored on firestore.                                    //
//           2) Slider Page: Basic Image Slider which contain 3 images.                                    //
//                           Integrates react-simple-image-slider module.                                  //
//           3) Filter Page: Fetched Registered Student details from firestore.                            //
//                           Display Registered Students on table.                                         //
//                           Filters Students based on their year and branch.                              //
//           4) Counter: initiates with zero on load and increases by one representing the number of       //
//                       clicks by the user on the app screens in a single session                         //
//                                                                                                         //
//  # Integrated Firebase Analytics in the project to log events.                                          //
//  # Hosted the website on firebase(url): https://springwoodassignment.web.app/                           //
//                                                                                                         //
//  Tech Stack:- React.js for frontend framework                                                           //
//               Tailwind CSS layout design                                                                //
//               Firebase and Firestore for storage                                                        //
//                                                                                                         //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </BrowserRouter>
);

