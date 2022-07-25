import React, { useContext } from 'react';
import axios from 'axios';
import CertificationForm from './AddCertificationForm';
import { Navigate } from 'react-router-dom';
import './Certification.css';

type Props = {};

const CertificationPost = (props: Props) => {
    const handleLogin = async (certificationName: string,organizationName: string,startDate: string,endDate: string,description: string) => {
        try {
            const response = await axios.post(
                'http://localhost:8000/api/add_certification',
                {
                    certificationName: certificationName,
                    organizationName: organizationName,
                    startDate: startDate,
                    endDate: endDate,
                    description: description
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='page-style'>
            <CertificationForm onAdd={handleLogin}></CertificationForm>
        </div>
    );
};

export default CertificationPost;