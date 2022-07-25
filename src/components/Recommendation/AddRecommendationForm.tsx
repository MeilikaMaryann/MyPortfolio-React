import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Recommendation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import your icons
import { faEnvelope, faUser, faUserTag, faPhone, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

type AddProps = {
  onAdd: (
  fullName: string,
  position: string,
  contactNo: string,
  email: string,
  letter: string
  ) => void;
};

const AddRecommendationForm = (props: AddProps) => {

  const [fullName, setFullName] = useState('');
  const [position, setPosition] = useState('');
  const [contactNo, setcontactNo] = useState('');
  const [email, setEmail] = useState('');
  const [letter, setLetter] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //by default it will submit the form, so prevent
    e.preventDefault();
    props.onAdd(fullName,position,contactNo,email,letter);
    setFullName('');
    setPosition("");
    setcontactNo("");
    setEmail("");
    setLetter("");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setFullName(e.target.value);
  };

  const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setPosition(e.target.value);
  };

  const handleContactNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setcontactNo(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setEmail(e.target.value);
  };

  const handleLetterChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e);
    setLetter(e.target.value);
  };

  return (
     <div className='div-to-align'>
      <div className="register-form mt-3 mb-3">
       <div className="container">
          <div className="row">
            <div style={{backgroundColor:"#ff7e5f"}} className="col-md-6 d-none d-md-block">
                <h1 className="text-center pt-3">Add Recommendation</h1>
            </div>
            <div className="col-md-6 bg-dark">
            <form onSubmit={handleSubmit} className='add-form'>
            <div className="form-group">
            <label id="recommendationLabel" htmlFor="name"><FontAwesomeIcon icon={ faUser } /> Name :</label>
                <input
                    type='text'
                    value={fullName}
                    size={30}
                    className='form-control'
                    onChange={handleNameChange}
                /> <br></br>
                </div>
                <div className="form-group">
                <label id="recommendationLabel" htmlFor="name"><FontAwesomeIcon icon={ faUserTag } /> Position/Role :</label>
                    <input
                        type='text'
                        value={position}
                        size={30}
                        className='form-control'
                        onChange={handlePositionChange}
                    /><br></br>
                  </div>
                  <div className="form-group">
                  <label id="recommendationLabel" htmlFor="name"><FontAwesomeIcon icon={ faPhone } /> Contact Number :</label>
                <input 
                    type='number'
                    value={contactNo}
                    size={30}
                    className='form-control'
                    onChange={handleContactNoChange}
                /><br></br>
                </div>
                <div className="form-group">
                <label id="recommendationLabel" htmlFor="email"><FontAwesomeIcon icon={ faEnvelope } /> Email :</label>
                    <input 
                        type='email'
                        value={email}
                        size={30}
                        className='form-control'
                        onChange={handleEmailChange}
                    /><br></br>
                </div>
                <div className="form-group">
                <label id="recommendationLabel" htmlFor="email"><FontAwesomeIcon icon={ faEnvelopeOpenText } /> Letter Of Recommendation :</label>
                    <textarea
                        value={letter}
                        className='form-control'
                        onChange={handleLetterChange}
                    />
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

export default AddRecommendationForm;
