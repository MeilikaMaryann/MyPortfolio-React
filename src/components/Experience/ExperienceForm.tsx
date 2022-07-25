import React from "react";
import { useContext,useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import './ExperienceForm.css'
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import AuthContext, { AuthContextType } from "../../context/AuthContext";
type AddProps={
    //  onAdd:(jobtitle: string,company:string,jobstatus:string,
    //      description:string,location:string,startDate: string,endDate: string) => void;
}

const ExperienceForm=(props:AddProps) => {
    const auth = useContext(AuthContext) as AuthContextType;
    const [jobtitle, setJobTitle] = useState("");
    const [company, setCompany] = useState("");
    const [jobstatus, setJobStatus] = useState("");
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");

    

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJobTitle(e.target.value);
    }

    const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCompany(e.target.value);
    }

    const handleJobStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJobStatus(e.target.value);
    }

    const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setStartDate(e.target.value);
      };
    
      const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setEndDate(e.target.value);
      };
      
      const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }

    const handleLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    }
    const navigate = useNavigate();
    const navigateToLoginPage = () => {
      navigate("/login");
    };
  
    const handleSubmit =async (e: React.ChangeEvent<HTMLFormElement>) => {
        console.log("handle submit");
    e.preventDefault();
    if ((auth.isLoggedIn && auth.userId) || (localStorage.getItem("userId"))) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/add_experience",
          {
            userId: auth.userId ? auth.userId : localStorage.getItem("userId"),
            
            jobtitle: jobtitle,
            company: company,
            jobstatus:jobstatus,
            startDate:startDate,
            endDate:endDate,
            description:description,
            location:location,
           
          }
        );
        if (response.status == 200 && response.data) {
          toast("Your Work experience has been updated successfully.");
        } else {
          toast("Something wrong. Please try again.");
        }
      } catch (err: any) {
        toast("Something wrong. Please try again.");
      }
    } else {
      navigateToLoginPage();
    }
        // props.onAdd(jobtitle, company,jobstatus,description,location,startDate,endDate);
        // setJobTitle('');
        // setCompany('');
        // setJobStatus('');
        // setStartDate("");
        // setEndDate("");
        // setDescription('');
        // setLocation('');

    }

    return(
<div>
    <ToastContainer/>
    <div className='experience-page'>
    <div className='card'>
    <div className="card-body pd-card">
        <form className="col-12" onSubmit={handleSubmit}>
            <div className="form-row mt-2 mb-2 inputtext">
            <label className="col-sm-2 col-form-label labeltext">Job Title:</label>
                    <input
                    type='text'
                    size={30}
                    className='form-control col-sm-10'
                    value={jobtitle}
                    placeholder='Enter Job Title'
                    onChange={handleTitleChange}
                    />
            </div>
            <div className="form-row mt-2 mb-2 inputtext">
            <label className="col-sm-2 col-form-label labeltext">Company:</label>
                    <input
                    type='text'
                    size={30}
                    className='form-control col-sm-10'
                    value={company}
                    placeholder='Enter Company'
                    onChange={handleCompanyChange}
                    />
            </div>
                  
            
            <div className="form-row mt-2 mb-2 inputtext">
            <label className="col-sm-2 col-form-label labeltext">Job Status:</label>
                    <input
                    type='text'
                    size={30}
                    className='form-control col-sm-10'
                    value={jobstatus}
                    placeholder='Enter Job Status'
                    onChange={handleJobStatus}
                    />
            </div>     
            <div className="form-row mt-2 mb-2 inputtext">
            <label className="col-sm-2 col-form-label labeltext">Start date:</label>
                    <input
                    type='date'
                    size={30}
                    className='form-control col-sm-10'
                    value={startDate}
                    placeholder='Enter Duration'
                    onChange={handleStartDateChange}
                    />
            </div> 
            <div className="form-row mt-2 mb-2 inputtext">
            <label className="col-sm-2 col-form-label labeltext">End Date:</label>
                    <input
                    type='date'
                    size={30}
                    className='form-control col-sm-10'
                    value={endDate}
                    placeholder='Enter Duration'
                    onChange={handleEndDateChange}
                    />
            </div> 

            <div className="form-row mt-2 mb-2 inputtext">
            <label className="col-sm-2 col-form-label labeltext">Description:</label>
                    <input
                    type='text'
                    size={30}
                    className='form-control col-sm-10'
                    value={description}
                    placeholder='Enter Description'
                    onChange={handleDescription}
                    
                    />
            </div> 
                   
                   
            <div className="form-row mt-2 mb-2 inputtext">
            <label className="col-sm-2 col-form-label labeltext">Location:</label>
                    <input
                    type='text'
                    size={30}
                    className='form-control col-sm-10'
                    value={location}
                    placeholder='Enter Location'
                    onChange={handleLocation}
                    />
            </div>     
                   
                 
                
                <input className='btn btn-primary btn savebtn' type='submit' value='Add New Experience'/>
                
            
                </form>
                </div>
                </div >
            </div>
        </div>
    )
}
export default ExperienceForm;