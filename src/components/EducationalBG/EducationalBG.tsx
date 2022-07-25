import React, { useContext } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import EducationalForm from './EducationalForm';
type Props = {};

const EducationalBG = () => {

    const handleEducation = async (school: string, college: string, master: string, masterCourse: string, course: string, additional: string) => {
        try {
            const response = await axios.post(
                'http://localhost:8000/api/addEducation',
                {
                    school: school,
                    college: college,
                    master: master,
                    masterCourse: masterCourse,
                    additional: additional,
                    course: course
                }
            );
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='page-style'>
            <EducationalForm onAddEdu={handleEducation}></EducationalForm>
        </div>
    );
};

export default EducationalBG;