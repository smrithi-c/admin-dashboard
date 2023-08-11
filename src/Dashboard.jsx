import {onAuthStateChanged, signOut} from "firebase/auth"
import React, {useEffect, useState} from "react"
import { auth, retrievesdata } from "./firebase"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const Dashboard = () => {
    const [authUser,setAuthUser] = useState(null);
    const [students, setStudents] = useState();
    const [teachers, setTeachers] = useState();

   
useEffect (() => {
    
    retrievesdata("students")
        .then((res) => { 
            setStudents(res);
        })


        retrievesdata("teachers")
        .then((res) => { 
            setTeachers(res);
        })


    const listen = onAuthStateChanged(auth,(user) => {
        if (user) {
            setAuthUser(user);
        }
        else {
            setAuthUser(null);
        }
    
});



return () => {
    listen();
};
}, []);

const userSignOut = () => {
    signOut(auth)
    .then(() => {
        console.log("Sign Out Successful");
    })
    .catch((error) => console.log(error))
};

return (
    <div>
        
            <h1> Dashboard </h1>
            <p> Welcome!</p>
            <button onClick = {userSignOut}> Sign Out </button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>

   <div style={{ display: "flex", justifyContent: "center"}}>
    <Box
      sx={{
        width: "30vw",
        height:"fit-content",
        align: 'center',
        backgroundColor: 'primary.light',
        '&:hover': {
          backgroundColor: 'primary.light',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
      <h1 align = "center"> # of Students </h1>
      <h1> {`${students}`}</h1>
      </Box>

      <Box
      sx={{
        width: "30vw",
        height:"fit-content",
        align: 'center',
        marginLeft : "10vw",
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.dark',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
      <h1 align = "center"> # of Teachers </h1>
      <h1> {`${teachers}`}</h1>
      </Box>
    </div>
    </div>
  
   

          
        

    </div>
);
};

export default Dashboard;