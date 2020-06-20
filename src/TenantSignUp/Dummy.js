// import React, { useState, useEffect } from 'react';
// import { BASE_URL } from '../util/provider';
// import { getTodayDate } from '../util/getDate';

// function Dummy() {

//         const [error, setError] = useState(null);
//         const [isLoaded, setIsLoaded] = useState(false);
//         const [noData, setNoData] = useState(false);
//         const [items, setItems] = useState([]);

//         const [userID, setUserId] = useState('');
//         const [userName, setUserName] = useState('');
//         const [userTitle, setUserTitle] = useState('');
//         const [userPassword, setUserPasword] = useState('');
//         const [userQuestion, setUserQuestion] = useState('');
//         const [userAnswer, setUserAnswer] = useState('');
//         const [userMotName, setUserMotName] = useState('');


//         const submitValue = () => {

//                 if (userID === "") {
//                         alert('Please fill user id');
//                 } else if (userName === "") {
//                         alert('Please fill user name');
//                 } else if (userTitle === "") {
//                         alert('Please fill user title');
//                 } else if (userPassword === "") {
//                         alert('Please fill user password');
//                 } else if (userQuestion === "") {
//                         alert('Please fill qustion');
//                 } else if (userAnswer === "") {
//                         alert('Please fill answer');
//                 } else if (userMotName === "") {
//                         alert('Please fill mother name');
//                 } else {

//                         let datas = {
//                                 txn_cd: 'MEDPRO02',
//                                 tstamp: getTodayDate(),
//                                 data: {
//                                         userID: userID,
//                                         userName: userName,
//                                         title: userTitle,
//                                         password: userPassword,
//                                         question: userQuestion,
//                                         answer: userAnswer,
//                                         motherName: userMotName,
//                                         userStatus: '001',
//                                         loginStatus: '001',
//                                         idCategory: '001',
//                                         remoteCount: '0',
//                                         userType: '001',
//                                         userCategory: '001',
//                                         userClasificationCd: '001',
//                                         status: '1',
//                                         roomNo: '01',
//                                         startDate: '',
//                                         endDate: '',
//                                         remoteLogoutDate: ''

//                                 },
//                         };

//                         console.log(datas);


//                         fetch(BASE_URL,
//                                 {
//                                         method: 'POST',
//                                         headers: {
//                                                 Accept: 'application/json',
//                                                 'Content-Type': 'application/json',
//                                         },
//                                         body: JSON.stringify(datas),
//                                 })
//                                 .then(res => res.json())
//                                 .then(
//                                         (result) => {

//                                                 console.log(result);

//                                                 if (result.status === "SUCCESS") {
//                                                         alert('Successfully register')
//                                                 } else if (result.status === "duplicate") {
//                                                         alert('User already regsiter')
//                                                 } else {
//                                                         alert('Fail register')
//                                                 }

//                                                 setUserId("");
//                                                 setUserName("");
//                                                 setUserTitle("");
//                                                 setUserPasword("");
//                                                 setUserQuestion("");
//                                                 setUserAnswer("");
//                                                 setUserMotName("");
//                                         },
//                                         (error) => {
//                                                 setIsLoaded(true);
//                                                 setError(error);
//                                         }
//                                 )

//                 }



//         }

//         // useEffect(() => {

//         //         let datas = {
//         //                 txn_cd: 'MEDPRO04',
//         //                 tstamp: getTodayDate(),
//         //                 data: {
//         //                         userID: 'panda'
//         //                 },
//         //         };

//         //         console.log(datas)

//         //         fetch(BASE_URL,
//         //                 {
//         //                         method: 'POST',
//         //                         headers: {
//         //                                 Accept: 'application/json',
//         //                                 'Content-Type': 'application/json',
//         //                         },
//         //                         body: JSON.stringify(datas),
//         //                 })
//         //                 .then(res => res.json())
//         //                 .then(
//         //                         (result) => {

//         //                                 console.log(result);

//         //                                 if (result.status.length !== 0) {
//         //                                         setIsLoaded(true);
//         //                                         setItems(result.status[0]);
//         //                                 } else {
//         //                                         setIsLoaded(true);
//         //                                         setNoData(true);
//         //                                 }
//         //                         },
//         //                         (error) => {
//         //                                 setIsLoaded(true);
//         //                                 setError(error);
//         //                         }
//         //                 )
//         // }, [])


//         return (
//                 <div>
//                         <input type="text" placeholder="User ID" onChange={e => setUserId(e.target.value)} /><br />
//                         <input type="text" placeholder="User Name" onChange={e => setUserName(e.target.value)} /><br />
//                         <input type="text" placeholder="Title" onChange={e => setUserTitle(e.target.value)} /><br />
//                         <input type="text" placeholder="password" onChange={e => setUserPasword(e.target.value)} /><br />
//                         <input type="text" placeholder="question" onChange={e => setUserQuestion(e.target.value)} /><br />
//                         <input type="text" placeholder="answer" onChange={e => setUserAnswer(e.target.value)} /><br />
//                         <input type="text" placeholder="mother name" onChange={e => setUserMotName(e.target.value)} /><br /><br />
//                         <button onClick={submitValue}>Submit</button>
//                         {
//                                 noData ? (
//                                         <div>
//                                                 <h1>No data</h1>
//                                         </div>
//                                 ) : (
//                                                 <div>
//                                                         <h1>{items.user_name}</h1>
//                                                 </div>
//                                         )
//                         }

//                 </div>
//         );

// }

// export default Dummy