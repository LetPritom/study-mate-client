import React from 'react';
import logo from '../assets/study.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaXTwitter } from 'react-icons/fa6';
import { FaWhatsappSquare } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className='h-auto bg-linear-to-br from-slate-900 via-blue-950 to-black'>
            <h1 className=''>Footer</h1>
            <div className='w-10/12 mx-auto flex flex-col md:flex-row lg:flex-row justify-between gap-5 py-5 mt-5'>
            <div className="img-title w-64">
                <img className='w-20 h-20' src={logo} alt="" />
                <h1 className='text-white font-bold text-3xl py-2'>StudyMate</h1>
                
            </div>  

            <div className="contact-info">
                <ul className='text-white flex flex-col gap-2'>
                    <li className='text-xl'> Contact Us</li>
                    <li className='flex items-center gap-2 hover:underline cursor-pointer'><IoMdCall /> 01522-110011</li>
                    <li className='flex items-center gap-2 hover:underline cursor-pointer'><SiGmail /> studymate024@gmail.com</li>
                    <li className='flex items-center gap-2 hover:underline cursor-pointer'><IoLocationSharp />Dhaka Baridhara, Bangladesh</li>
                </ul>
            </div>

            <div className="info-links">
                <ul className='text-white flex flex-col gap-2'>
                    <li className='text-xl'>Useful Link</li>
                    <li className='hover:underline cursor-pointer'>About</li>
                    <li className='hover:underline cursor-pointer'>Support</li>
                    <li className='hover:underline cursor-pointer'>Student Help</li>
                    <li className='hover:underline cursor-pointer'>Privacy</li>
                    <li className='hover:underline cursor-pointer'>Legal</li>
                </ul>
            </div>
            

            <div className="social-links flex flex-col gap-4">
                <h1 className='text-white text-xl'>Follow Us</h1>
                <ul className='text-white flex flex-col  gap-2'>
                    <li className='flex items-center gap-2 hover:underline cursor-pointer'><FaFacebook />Facebook</li>
                    <li className='flex items-center gap-2 hover:underline cursor-pointer'><FaInstagram />Instagram</li>
                    <li className='flex items-center gap-2 hover:underline cursor-pointer'><FaXTwitter />Twitter</li>
                    <li className='flex items-center gap-2 hover:underline cursor-pointer'><FaLinkedin />Linkedin</li>
                    <li className='flex items-center gap-2 hover:underline cursor-pointer'><FaWhatsappSquare/>Whatsapp</li>
                </ul>
            </div>
            </div>
            <div className="des text-center w-9/12 mx-auto">
                <div className="describe flex flex-col py-5">
                    <h1 className='text-center text-gray-200 '>Description</h1>
                    <p className=' w-auto text-sm text-gray-400 '>StudyMate – Your personal study dashboard. Create dynamic study carts, add study buddies, track progress, and stay focused. All data securely saved & fetched from database. Private routes | Real-time search & sort | Built for future rankers. Made with 💙 by a beginner grinding daily. </p>
                    {/* <p className=' w-auto text-sm text-gray-400'>  </p> */}
                   
                </div>
            </div>
            <hr className='border border-white w-10/12 mx-auto my-5' />
            <div className="copyright text-center py-5 w-7/12 mx-auto">
                <p className='text-white text-sm'>Copyright © 2025 StudyMate, Inc. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;