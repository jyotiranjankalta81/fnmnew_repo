import React from 'react';
import { Route, Routes } from "react-router-dom";
import Enavbar from '../screens/Employers/container/navbar/Enavbar';
import { SignupLogin } from '../screens/jobseekers/SignupLogin/SignupLogin';

export default function EmployerRoute (){
    return (
        <>
        <Routes>
            <Route exact path="/" element={<Enavbar/>} />
            <Route exact path='/signuplogin' element={<SignupLogin/>}/>
        </Routes>
        </>
    )

}