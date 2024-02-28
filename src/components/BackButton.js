import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

export const BackButton = ({ destination = '/' }) => {
    return (
        <Link to={destination}
            className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
            <BsArrowLeft className='text-2xl' />
        </Link>
    )
}

export default BackButton;