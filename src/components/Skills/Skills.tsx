import { useContext, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './Skills.css';
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import AuthContext, { AuthContextType } from "../../context/AuthContext";

type SkillsProps={
    // onAdd:(skill:string)=>void;
};
const Skills = (props:SkillsProps) => {
    const auth = useContext(AuthContext) as AuthContextType;
    const [skill,setSkill] =useState("");
    
   
        const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSkill(e.target.value);
            
        }
        const navigate = useNavigate();
  const navigateToLoginPage = () => {
    navigate("/login");
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
      console.log("Handing submit");
    e.preventDefault();
    if((auth.isLoggedIn&&auth.userId)||(localStorage.getItem("userId"))){
        try {
            const response = await axios.post(
                "http://localhost:8000/api/add_skills",
                {
                    userId:auth.userId?auth.userId :localStorage.getItem("userId"),
                    SkillName:skill,
                }
            );
            if(response.status==200&&response.data){
                toast("New Skill added!");
            }else{
                toast("Something wrong. Please try again.");
            }
            
        } catch (err:any) {
            toast("Something wrong. Please try again!");
        }
    }
    else{
        navigateToLoginPage();
    }

    //   props.onAdd(skill);
    //   setSkill('');
}

    return (
        
        <div>
           <ToastContainer />
            <div className='personal-details-page'>
            <div className='card'>
            <div className="card-body pd-card">
                <form className='add-form col-12' onSubmit={handleSubmit}>
                <div className="form-row mt-2 mb-2 inputtext">
            
                
                  
                  
            <label className="col-sm-2 col-form-label labeltext">Enter Skill:</label>
                    <input
                        type='text'
                        size={30}
                        id='firstName'
                        className='form-control col-sm-10'
                        value={skill}
                        placeholder='Enter Skill'
                        onChange={handleSkillChange}
                        />
                       
                       </div>          

                       <br></br>
                    <input className='btn btn-primary mb-2 savebtn' type='submit' value='Add Skill' /> 
                   
                </form>
                <br></br>
            </div>
        </div>
        </div>
        </div>
)}

export default Skills;



