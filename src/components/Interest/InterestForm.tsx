 import { useState } from "react";
 import $ from 'jquery';
import './Interest.css';
import { useNavigate } from "react-router-dom";

type InterestProps = {
    onAddInterest: (interest: string) => void;
};

const InterestForm = (props: InterestProps) => {
     

    const [interest, setInterest] = useState("");

    const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setInterest(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onAddInterest(interest);
        setInterest("");
    };

    
 return (
     <div className='div-to-align'>
      <div className="register-form mt-3 mb-3">
       <div className="container">
          <div className="row">
            <div style={{backgroundColor:"#ff7e5f"}} className="col-md-6 d-none d-md-block">
                <h1 className="text-center pt-3">Add Interest</h1>
            </div>
            <div className="col-md-6 bg-dark">
            <form onSubmit={handleSubmit} className='add-form'>
            <div className="form-group">
            <label id="recommendationLabel" htmlFor="name"> Name :</label>
                <input
                    type='text'
                    value={interest}
                    size={30}
                    className='form-control'
                    onChange={handleInterestChange}
                /> <br></br>
                </div>
                <input className='btn btn-warning mb-3 mt-3 float-right' type='submit' value='Submit' />     
                </form>
            </div>
        </div>
      </div>
    </div>
 </div>
    );
    };


export default InterestForm;