import React from 'react';
import { NavLink } from 'react-router';
import { FaBookOpenReader, FaListCheck, FaUser } from 'react-icons/fa6';
import { GiPodiumWinner } from 'react-icons/gi';
import { GoHomeFill } from 'react-icons/go';
import { MdOutlineCreateNewFolder, MdPerson } from 'react-icons/md';
import Menu from '../Menu/Menu';

const UserSidebar = () => {
    return (
        <div className='flex flex-col gap-2 mt-2 '>
            
            <NavLink to='/dashboard/my-connection'><Menu title={'My connections'} icon={<FaBookOpenReader/>}>My connections</Menu></NavLink>
            <NavLink to='/dashboard/create-partner'><Menu title={'Create Partner'} icon={<MdOutlineCreateNewFolder/>}>Create Partner</Menu></NavLink>
            

        </div>
    );
};

export default UserSidebar;