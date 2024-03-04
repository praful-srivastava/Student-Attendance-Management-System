/*import React from 'react';
import { useEffect ,useState} from 'react';
import StudentNavBar from "./StudentNavBar"
import axios from 'axios';


function TimeTable() {

  const [data, setData] = useState({timetables: [], isFetching: false});
  const [searchText, setSearchText] = useState('')

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    console.log(searchText);
}
    useEffect(() => {
      const fetchtimetables= async () => {
          try {
            setData((data)=>({timetables:data.timetables,isFetching:true}));
            const response =await axios.get('http://localhost:8080/student/timetable')
            setData({timetables:response.data,isFetching:false});
            console.log(response);
            return response;
          } catch (e) {
              console.log(e);
              setData((data)=>({timetables:data.timetables,isFetching:false}));
          }
      };
      fetchtimetables();
  }, []);

    return (
          <div>
            <StudentNavBar/>
            
            <div className='cotainer-fluid'>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
       <div className="col-8 p-5 shadow bg-white">
           <center><span><h1>Attendance</h1></span></center>
           

          <div>
          <label>Select Subject</label>
          <br></br>
          <select >
            <option value="student">C++</option>
            <option value="faculty">CORE JAVA</option>
            <option value="admin">DBMS</option>
            <option value="student">WPT</option>
            <option value="faculty">DOT NET</option>
            <option value="admin">ADVANCE JAVA</option>
          </select>
        </div>
            <br></br>
           <table className="table table-striped table-secondary">
                 <thead className='table-dark'>
                  <tr>
            
                 <th>Date</th>
                 <th>Attendance</th>
              
                 </tr>
                     </thead>
                 <tbody>

                 {
             data.timetables.filter((val)=>{
              if(searchText==""){
                return val
              }else if(val.moduleName.toLowerCase().includes(searchText.toLowerCase()) || val.facultyName.toLowerCase().includes(searchText.toLowerCase())){
              return val
            }
             })
               
               .map(({id,facultyName,date,startTime,endTime,moduleName,platform,link})=>
             <tr>
              <td>{id}</td>
              <td>{facultyName}</td>
             <td>{date}</td>
             <td>{startTime}</td>
             <td>{endTime}</td>
             <td>{moduleName}</td>
             <td>{platform}</td>
            <td><a href='#'>{link}</a></td>
             </tr>  )}
              
                 </tbody>
              </table>
            </div>


            </div>

        </div>
          </div>
    );
  }
  
  export default TimeTable;

  ----------------------------------------------------------
  */

  // App.js

// import React, { useState, useEffect } from 'react';
// // import './App.css';

// const App = () => {
//   const [subjects, setSubjects] = useState([]);
//   const [selectedSubject, setSelectedSubject] = useState('');
//   const [attendanceData, setAttendanceData] = useState({});

//   useEffect(() => {
//     // Fetch subjects from API or use your data fetching logic
//     const fetchSubjects = async () => {
//       // Replace with your actual API endpoint or data fetching logic
//       const mockSubjects = ['Math', 'DBMS', 'WPT','DOT NET','ADVANCE JAVA'];
//       setSubjects(mockSubjects);
//     };

//     fetchSubjects();
//   }, []);

//   useEffect(() => {
//     // Fetch attendance data for the selected subject from API or use your data fetching logic
//     const fetchAttendanceData = async () => {
//       if (selectedSubject) {
//         // Replace with your actual API endpoint or data fetching logic
//         const mockAttendanceData = {
//           Math: {
//             '2024-02-15': 'Present',
//             '2024-02-16': 'Absent',
//             // Add more date-wise data as needed
//           },
//           Science: {
//             '2024-02-15': 'Present',
//             '2024-02-16': 'Present',
//           },
//           History: {
//             '2024-02-15': 'Absent',
//             '2024-02-16': 'Absent',
//           },
//         };

//         setAttendanceData(mockAttendanceData[selectedSubject] || {});
//       }
//     };

//     fetchAttendanceData();
//   }, [selectedSubject]);

//   const handleSubjectChange = (e) => {
//     setSelectedSubject(e.target.value);
//   };

//   return (
//     <div className="app">
//       <h1>Attendance Tracker</h1>
//       <div className="subject-dropdown">
//         <label>Select Subject:</label>
//         <select onChange={handleSubjectChange} value={selectedSubject}>
//           <option value="">Select</option>
//           {subjects.map((subject) => (
//             <option key={subject} value={subject}>
//               {subject}
//             </option>
//           ))}
//         </select>
//       </div>
//       {selectedSubject && (
//         <div className="attendance-table">
//           <h2>Attendance for {selectedSubject}</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Attendance Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Object.entries(attendanceData).map(([date, status]) => (
//                 <tr key={date}>
//                   <td>{date}</td>
//                   <td>{status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;









import React, { useState, useEffect } from 'react';
// import './App.css';

const App = () => {
  const [moduleNames, setModuleNames] = useState([]);
  const [selectedModule, setSelectedModule] = useState('');
  const [attendanceDetails, setAttendanceDetails] = useState([]);

  useEffect(() => {
    // Fetch module names from API or use your data fetching logic
    const fetchModuleNames = async () => {
      // Replace with your actual API endpoint or data fetching logic
      const mockModuleNames = ['Math', 'DBMS', 'WPT', 'DOT NET', 'ADVANCE JAVA'];
      setModuleNames(mockModuleNames);
    };

    fetchModuleNames();
  }, []);

  useEffect(() => {
    // Fetch attendance details for the selected module from API or use your data fetching logic
    const fetchAttendanceDetails = async () => {
      if (selectedModule) {
        // Replace with your actual API endpoint or data fetching logic
        const mockAttendanceDetails = [
          { date: '2024-02-15', studentName: 'John Doe', status: 'Present' },
          { date: '2024-02-16', studentName: 'Jane Smith', status: 'Absent' },
          // Add more attendance data as needed
        ];

        setAttendanceDetails(mockAttendanceDetails);
      }
    };

    fetchAttendanceDetails();
  }, [selectedModule]);

  const handleModuleChange = (e) => {
    setSelectedModule(e.target.value);
  };

  return (
    <div className="app">
      <h1>Attendance Tracker</h1>
      <div className="module-dropdown">
        <label>Select Module:</label>
        <select onChange={handleModuleChange} value={selectedModule}>
          <option value="">Select</option>
          {moduleNames.map((moduleName) => (
            <option key={moduleName} value={moduleName}>
              {moduleName}
            </option>
          ))}
        </select>
      </div>
      {selectedModule && (
        <div className="attendance-table">
          <h2>Attendance Details for {selectedModule}</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Student Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceDetails.map(({ date, studentName, status }) => (
                <tr key={date}>
                  <td>{date}</td>
                  <td>{studentName}</td>
                  <td>{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
