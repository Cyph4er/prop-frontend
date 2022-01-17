import React, { useState } from "react";
// import PropertyDataService from '../services/property.service';

export default function PropertyAdd(){
  const [submitted, setSubmitted] = useState(false);
  const [id, setID] = useState(null);
  const [propName, setPropName] = useState();
  const [location, setLocation] = useState();
  const [accomType, setAccomType] = useState();
  const [address, setAddress] = useState();
  const [area, setArea] = useState();

  function saveProperty(){
    // var data = {
    //   name: propName,
    //   location: location,
    //   accomodation_typ: accomType,
    //   address: address,
    //   area: area,
    // };
    // PropertyDataService.create(data).then(response => {
      
    //     setID(response.data.id);
    //     setPropName(response.data.title);
    //     setLocation(response.data.description);
    //     setAccomType(response.data.published);

    //     setSubmitted(true); //set after data is passed
      
    //   console.log(response.data);
    // }).catch(e => {
    //   console.log(e);
    // });
    //data to be used to pass information to backend with the appropriate func
    setSubmitted(true); //set after data is passed
  }

  function newProperty(){
    setPropName();
    setLocation();
    setAccomType();
    setAddress();
    setArea();

    setSubmitted(false);
  }

  return(
    <>
    <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newProperty}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Property Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={propName}
                onChange={(e) =>{
                  setPropName(e.target.value);
                }}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                required
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                name="location"
              />
            </div>

            <div className="form-group">
              <label htmlFor="accomtype">Accomodation Type</label>
              <input
                type="text"
                className="form-control"
                id="accomtype"
                required
                value={accomType}
                onChange={(e) => {
                  setAccomType(e.target.value);
                }}
                name="accomtype"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Property Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                name="address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="area">Area</label>
              <input
                type="text"
                className="form-control"
                id="area"
                required
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                }}
                name="area"
              />
            </div>

            <button onClick={saveProperty} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    </>
  )
}