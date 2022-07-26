import React, { useContext } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import ProfessionalForm from './ProfessionalForm';
type Props = {};

const ProfessionalBG = () => {

    const handleProfessional = async (field: string, orgName: string, position: string, technology:string, timeFrom: string, timeTo: string) => {
        try {
            const response = await axios.post(
                'http://localhost:8000/api/addField',
                {
                    field : field,
                    orgName : orgName,
                    position : position,
                    technology : technology,
                    timeFrom: timeFrom,
                    timeTo : timeTo
                }
            );
        } catch (err) {
        }
    };

    return (
        
        <div className='page-style'>
            <ProfessionalForm onAddPro={handleProfessional}></ProfessionalForm>
        </div>
        
    );
};

export default ProfessionalBG;