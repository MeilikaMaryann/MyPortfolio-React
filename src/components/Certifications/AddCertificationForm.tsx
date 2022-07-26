import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Certification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import your icons
import { faCertificate, faBuilding, faCalendarDays, faMessage } from '@fortawesome/free-solid-svg-icons';


type AddProps = {
  onAdd: (
    certificationName: string,
    organizationName: string,
    startDate: string,
    endDate: string,
    description: string
  ) => void;
};

const AddCertificationForm = (props: AddProps) => {
  
  const [certificationName, setcertificationName] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //by default it will submit the form, so prevent
    e.preventDefault();
    props.onAdd(certificationName,organizationName,startDate,endDate,description);
    setcertificationName('');
    setOrganizationName("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  const handleCertificationNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setcertificationName(e.target.value);
  };

  const handleOrganizationNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setOrganizationName(e.target.value);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setStartDate(e.target.value);
  };

  const handleEndaDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setEndDate(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e);
    setDescription(e.target.value);
  };

  return (
    <div className='div-to-align'>
    <div className="register-form mt-3 mb-3">
     <div className="container">
        <div className="row">
          <div className="col-md-6 d-none d-md-block" style={{backgroundColor:"#ff7e5f"}}>
              <h1 className="text-center pt-3">Add Certification</h1>
          </div>
          <div className="col-md-6 bg-dark">
     <form onSubmit={handleSubmit} className='add-form'>
        <div className="form-group">
              <label id="recommendationLabel" htmlFor="name"><FontAwesomeIcon icon={ faCertificate } /> Certification Name :</label>
              <input
                  type='text'
                  value={certificationName}
                  size={30}
                  className='form-control'
                  onChange={handleCertificationNameChange}
              /> <br></br>
          </div>
          <div className="form-group">
            <label id="recommendationLabel" htmlFor="name"><FontAwesomeIcon icon={ faBuilding } /> Issuing Organization :</label>
            <input
                type='text'
                value={organizationName}
                size={30}
                className='form-control'
                onChange={handleOrganizationNameChange}
            /><br></br>
         </div>
         <div className="form-group">
            <label id="recommendationLabel" htmlFor="name"><FontAwesomeIcon icon={ faCalendarDays } /> Start Date :</label>
         <input 
             type='datetime-local'
             value={startDate}
             size={30}
             className='form-control'
             onChange={handleStartDateChange}
         /><br></br>
         </div>
         <div className="form-group">
            <label id="recommendationLabel" htmlFor="name"><FontAwesomeIcon icon={ faCalendarDays } /> End Date :</label>
         <input 
             type='datetime-local'
             value={endDate}
             size={30}
             className='form-control'
             onChange={handleEndaDateChange}
         /><br></br>
         </div>
         <div className="form-group">
            <label id="recommendationLabel" htmlFor="name"><FontAwesomeIcon icon={ faMessage } /> Description :</label>
         <textarea
             value={description}
             className='form-control'
             onChange={handleDescriptionChange}
         />
         </div>
         <input className='btn mb-3 mt-3 float-right' style={{backgroundColor:"#ff7e5f"}} type='submit' value='Submit' />        
     </form>
 </div>
 </div>
 </div>
 </div>
 </div>
  );
};

export default AddCertificationForm;
