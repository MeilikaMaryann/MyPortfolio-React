import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './EducationalBG.css';

// function EducationalBG (){
    
 
type EduProps = {
    onAddEdu: (school: string, college: string, master: string,  masterCourse: string, course: string, additional: string) => void;
};

const EducationalForm = (props: EduProps) => {
    const navigate = useNavigate();

    const [school, setSchool] = useState("");
    const [college, setCollege] = useState("");
    const [masters, setMaster] = useState("");
    const [masterCourse, setMasterCourse] = useState("");
    const [course, setCourse] = useState("");
    const [additional,setAdditional] = useState("");


const handleSchoolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setSchool(e.target.value);
};

const handleCollegeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setCollege(e.target.value);
};

const handleMasterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setMaster(e.target.value);
};

const handleMasterCourseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setMasterCourse(e.target.value);
};

const handleCourseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setCourse(e.target.value);
};

const handleAdditionalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setAdditional(e.target.value);
};




const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onAddEdu(school,college, masters, masterCourse, course, additional);
    setSchool("");
    setCollege("");
    setMaster("");
    setCourse("");
    setAdditional("");
    setMasterCourse("");
};


return (
    <div className='div-to-align'>

    <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <div className="row gx-lg-5 align-items-center mb-5">
                <div className="col-lg-6 mb-5 mb-lg-0 left-div" >
                <div className="card bg-glass">
                                <div className="card-body px-4 py-5">
    <div className='div-to-align'>
    <h2> Educational Details</h2><br></br>
    <form onSubmit={handleSubmit} className='add-form'>
            <div className="col-md-6 mb-4">
                <div className="form-outline">
                    <input type="text" id="school" onChange={handleSchoolChange} placeholder='School Name' className="form-control" />
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className="form-outline">
                    <input type="text" id="college" onChange={handleCollegeChange} placeholder='College Name' className="form-control" />
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className="form-outline">
                    <input type="text" id="course" onChange={handleCourseChange} placeholder='College Course Name' className="form-control" />
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className="form-outline">
                    <input type="text" id="university" onChange={handleMasterChange} placeholder='University Name' className="form-control" />
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className="form-outline">
                    <input type="text" id="course" onChange={handleMasterCourseChange} placeholder='University Course Name' className="form-control" />
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className="form-outline">
                    <input type="text" onChange={handleAdditionalChange} id="additional" placeholder='Additional Course Name' className="form-control" />
                </div>
            </div>
        

        <button className="btn btn-primary btn mb-4 " type="submit"> Submit </button>


    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>
);

};
 export default EducationalForm;