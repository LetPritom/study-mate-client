import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContex/AuthContext';
import ConnectionTable from './connectionTable';

const Myconnection = () => {

    const {user} = use(AuthContext)
    const [request , setRequest] = useState([]);
  
    // useEffect(() => {
    //     axios.get(`http://localhost:3000/request?email=${user.email}`)
    //     .then((res) => {
    //         const data = res.data;
    //         setRequest(data);
    //     })
    // } , [user.email])

    useEffect(() => {
        axios.get(`http://localhost:3000/partners`)
        .then((res) => {
            const data = res.data;
            setRequest(data);
        })
    } , [user.email])

    console.log(request);
    return (
        <div>
            <h1 className='text-center text-2xl font-bold my-10 text-[#f55a00]'>My Connection</h1>
            <div className='px-5 my-5 w-10/12 mx-auto'>
                {
                    request.map((res , index) => <ConnectionTable key={index} res={res}></ConnectionTable>)
                }
            </div>
        </div>
    );
};

export default Myconnection;