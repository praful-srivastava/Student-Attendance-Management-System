// import React from 'react'
// //import Faculty from '../StudentPages/ViewFaculty'
// import FacultyNavBar from './FacultyNavBar'
// import { useEffect ,useState} from 'react';
// import {useNavigate} from 'react-router-dom';
// import axios from 'axios';
// function ViewTimeTable() {
//   const [data, setData] = useState({timetables: [], isFetching: false});
//   const [searchText, setSearchText] = useState('')

//   const handleSearchText = (e) => {
//     setSearchText(e.target.value)
//     console.log(searchText);
// }
//   const navigate = useNavigate();
//     useEffect(() => {
//       const fetchtimetables= async () => {
//           try {
//             setData((data)=>({timetables:data.timetables,isFetching:true}));
//             const response =await axios.get(`http://localhost:8087/student-attendance-management/api/attendance/attendance`)
//             setData({timetables:response.data,isFetching:false});
//             console.log(response);
//             return response;
//           } catch (e) {
//               console.log(e);
//               setData((data)=>({timetables:data.timetables,isFetching:false}));
//           }
//       };
//       fetchtimetables();
//   }, []);
//   const removeTimeTable =(id) => {
//     axios.delete(`http://localhost:8080/faculty/viewtimetable/delete/${id}`).then((response) => {
//       alert("TimeTable record with Id " + id + " deleted!");
  
//       navigate('/faculty/viewtimetable')
//       navigate('/faculty/viewnoticeboard')
//     }).catch(error => {
//       alert("Error Ocurred in remove TimeTable :" + error);
//     });
  
//   }

//   return(
//     <div> <FacultyNavBar/>
//     <div className='cotainer-fluid'>
//     <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
//     <div className="col-8 p-5 shadow bg-white">
//         <center><span><h1>Attendance Details</h1></span></center>
//         {/* <div className='ui icon input'>
//               <input type='text' placeholder='Enter Module Name' className='prompt' name="searchText" onChange={handleSearchText} value= {searchText}></input>
//               <button ><i class="bi bi-search"></i></button>
//             </div> */}
//             <br></br>
//             <br></br>
//         <table className="table table-striped table-secondary">
//               <thead className='table-dark'>
//                   <tr>
//                       <th>PRN</th>
//                       <th>Name</th>
             
//                       <th>Module Name</th>
//                       <th>Attendance</th>
//                       <th>Overall Attendance</th>
//                       {/* <th>Platform</th> */}
//                       {/* <th>Link</th> */}
//                       {/* <th>Action</th> */}
//                   </tr>
//               </thead>
//               <tbody>
//               {
//              data.timetables.filter((val)=>{
//               if(searchText==""){
//                 return val
//               }else if(val.moduleName.toLowerCase().includes(searchText.toLowerCase())){
//               return val
//             }
//              })
//              .map(({id,date,status,session_module_name,student_name})=>
//              <tr>
//               <td>
//                 {id}
//               </td>
//                 <td>
//                 {date}
//                 </td>
//               <td>
//                 {status}
//               </td>
//               <td>
//                 {session_module_name}
//               </td>
//               <td>
//                 {student_name}
//               </td>
//               <td>
//               <button className="button muted-button" onClick={()=>navigate(`/faculty/edittimetable/${id}`)}>Edit</button>
//               {/* <button className="button muted-button" onClick={() => removeFaculty({id})}>Delete</button> */}
//               <button className="button muted-button" onClick={() => removeTimeTable(id)}>Delete</button>
//             </td>
//              </tr>
//              )}
            
//               </tbody>
//           </table>  
//           </div>
//           </div>
         
//       </div>
//       </div>

//   )
// }

// export default ViewTimeTable




// import React, { useEffect, useState } from 'react';
// import FacultyNavBar from './FacultyNavBar';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function ViewTimeTable() {
//     const [timetables, setTimetables] = useState([]);
//     const [searchText, setSearchText] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchTimetables = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8087/student-attendance-management/api/attendance/viewAttendance');
//                 setTimetables(response.data);
//             } catch (error) {
//                 console.error('Error fetching timetables:', error);
//             }
//         };
//         fetchTimetables();
//     }, []);

//     const removeTimeTable = (id) => {
//         axios.delete(`http://localhost:8080/faculty/viewtimetable/delete/${id}`)
//             .then(() => {
//                 alert(`TimeTable record with Id ${id} deleted!`);
//                 navigate('/faculty/viewnoticeboard');
//             })
//             .catch(error => {
//                 alert(`Error occurred in removing TimeTable: ${error}`);
//             });
//     };

//     return (
//         <div>
//             <FacultyNavBar />
//             <div className='container-fluid'>
//                 <div className="row justify-content-around align-items-center" style={{ height: "98vh", marginTop: 0 }}>
//                     <div className="col-8 p-5 shadow bg-white">
//                         <center><h1>Attendance Details</h1></center>
//                         <br />
//                         <input type='text' placeholder='Enter Module Name' className='prompt' name="searchText" onChange={(e) => setSearchText(e.target.value)} value={searchText}></input>
//                         <br />
//                         <br />
//                         <table className="table table-striped table-secondary">
//                             <thead className='table-dark'>
//                                 <tr>
//                                     <th>ID</th>
//                                     <th>Date</th>
//                                     <th>Status</th>
//                                     <th>Module Name</th>
//                                     <th>Student Name</th>
//                                     <th>Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {timetables
//                                     .filter((val) => {
//                                         if (searchText === "") {
//                                             return val;
//                                         } else if (val.moduleName.toLowerCase().includes(searchText.toLowerCase())) {
//                                             return val;
//                                         }
//                                     })
//                                     .map(({ prn, date, status, moduleName, studentName }) => (
//                                         <tr key={prn}>
//                                             <td>{prn}</td>
//                                             <td>{date}</td>
//                                             <td>{status}</td>
//                                             <td>{moduleName}</td>
//                                             <td>{studentName}</td>
//                                             <td>
//                                                 <button className="button muted-button" onClick={() => navigate(`/faculty/edittimetable/${id}`)}>Edit</button>
//                                                 <button className="button muted-button" onClick={() => removeTimeTable(id)}>Delete</button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ViewTimeTable;

// ///////////////////////////////////////////////// Working till fetching all attendance ==================>>>>>>>

// import React, { useEffect, useState } from 'react';
// import FacultyNavBar from './FacultyNavBar';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function ViewTimeTable() {
//     const [timetables, setTimetables] = useState([]);
//     const [searchText, setSearchText] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchTimetables = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8087/student-attendance-management/api/attendance/viewAttendance');
//                 setTimetables(response.data);
//             } catch (error) {
//                 console.error('Error fetching timetables:', error);
//             }
//         };
//         fetchTimetables();
//     }, []);

//     const removeTimeTable = (studentName) => {
//         axios.delete(`http://localhost:8087/student-attendance-management/api/attendance/attendance/${studentName}`)
//             .then(() => {
//                 alert(`Attendance record for student ${studentName} deleted!`);
//                 navigate('/faculty/ViewTimeTable');
//             })
//             .catch(error => {
//                 alert(`Error occurred in removing attendance record: ${error}`);
//             });
//     };

//     return (
//         <div>
//             <FacultyNavBar />
//             <div className='container-fluid'>
//                 <div className="row justify-content-around align-items-center" style={{ height: "98vh", marginTop: 0 }}>
//                     <div className="col-8 p-5 shadow bg-white">
//                         <center><h1>Attendance Details</h1></center>
//                         <br />
//                         <input type='text' placeholder='Enter Module Name' className='prompt' name="searchText" onChange={(e) => setSearchText(e.target.value)} value={searchText}></input>
//                         <br />
//                         <br />
//                         <table className="table table-striped table-secondary">
//                             <thead className='table-dark'>
//                                 <tr>
//                                     <th>ID</th>
//                                     <th>Date</th>
//                                     <th>Status</th>
//                                     <th>Module Name</th>
//                                     <th>Student Name</th>
//                                     <th>Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {timetables
//                                     .filter((val) => {
//                                         if (searchText === "") {
//                                             return val;
//                                         } else if (val.moduleName.toLowerCase().includes(searchText.toLowerCase())) {
//                                             return val;
//                                         }
//                                     })
//                                     .map(({ prn, date, status, moduleName, studentName }) => (
//                                         <tr key={prn}>
//                                             <td>{prn}</td>
//                                             <td>{date}</td>
//                                             <td>{status}</td>
//                                             <td>{moduleName}</td>
//                                             <td>{studentName}</td>
//                                             <td>
//                                                 <button className="button muted-button" onClick={() => navigate(`/faculty/edittimetable/${prn}`)}>Edit</button>
//                                                 <button className="button muted-button" onClick={() => removeTimeTable(studentName)}>Delete</button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ViewTimeTable;











import React, { useEffect, useState } from 'react';
import FacultyNavBar from './FacultyNavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ViewTimeTable() {
    const [timetables, setTimetables] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTimetables = async () => {
            try {
                if (selectedDate) {
                    const formattedDate = selectedDate.toISOString().split('T')[0];
                    const response = await axios.get(`http://localhost:8087/student-attendance-management/api/attendance/viewAttendance/${formattedDate}`);
                    setTimetables(response.data);
                }
            } catch (error) {
                console.error('Error fetching timetables:', error);
            }
        };
        fetchTimetables();
    }, [selectedDate]);

    const removeTimeTable = async (studentName) => {
        try {
            await axios.delete(`http://localhost:8087/student-attendance-management/api/attendance/attendance/${studentName}`);
            alert(`Attendance record for student ${studentName} deleted!`);
            const formattedDate = selectedDate.toISOString().split('T')[0];
        const response = await axios.get(`http://localhost:8087/student-attendance-management/api/attendance/viewAttendance/${formattedDate}`);
        setTimetables(response.data);
        } catch (error) {
            alert(`Error occurred in removing attendance record: ${error}`);
        }
    };

    return (
        <div>
            <FacultyNavBar />
            <div className='container-fluid'>
                <div className="row justify-content-around align-items-center" style={{ height: "98vh", marginTop: 0 }}>
                    <div className="col-8 p-5 shadow bg-white">
                        <center><h1>Attendance Details</h1></center>
                        <br />
                        <DatePicker
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            dateFormat="yyyy-MM-dd"
                            isClearable
                            placeholderText="Select Date"
                        />
                        <br />
                        <br />
                        <table className="table table-striped table-secondary">
                            <thead className='table-dark'>
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Module Name</th>
                                    <th>Student Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timetables.map(({ prn, date, status, moduleName, studentName }) => (
                                    <tr key={prn}>
                                        <td>{prn}</td>
                                        <td>{date}</td>
                                        <td>{status}</td>
                                        <td>{moduleName}</td>
                                        <td>{studentName}</td>
                                        <td>
                                            <button className="button muted-button" onClick={() => navigate(`/faculty/edittimetable/${id}`)}>Edit</button>
                                            <button className="button muted-button" onClick={() => removeTimeTable(studentName)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewTimeTable;
