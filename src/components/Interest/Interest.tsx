import React, { useContext } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import InterestForm from './InterestForm';
type Props = {};

const Interest = () => {

    const handlehobbyChange = async (interest: string) => {
        try {
            const response = await axios.post(
                'http://localhost:8000/api/addInterest',
                {
                    interest : interest
                }
            );
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='page-style'>
            <InterestForm onAddInterest={handlehobbyChange}></InterestForm>
        </div>
    );
};

export default Interest;