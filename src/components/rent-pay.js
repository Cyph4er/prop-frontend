import React, { useState } from "react";

export default function RentPayment(){
  const [submitted, setSubmitted] = useState(false);
  const [tentid, setTentid] = useState();
  const [propertyid, setPropertyid] = useState();
  const [unitNo, setUnitNo] = useState();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  // const [date, setDate] = useState();

  function savePayment(){
    // var data = {
    //   name: propName,
    //   location: location,
    //   accomodation_typ: accomType,
    //   address: address,
    //   area: area,
    // };
    //data to be used to pass information to backend with the appropriate func
    setSubmitted(true); //set after data is passed
  }

  function newPayment(){
    setTentid();
    setPropertyid();
    setUnitNo();
    setAmount();
    setDescription();
    // setDate();
    
    setSubmitted(false);
  }

  return(
    <>
    <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newPayment}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="tenantid">Tenant ID</label>
              <input
                type="text"
                className="form-control"
                id="tenantid"
                required
                value={tentid}
                onChange={(e) =>{
                  setTentid(e.target.value);
                }}
                name="tenantid"
              />
            </div>

            <div className="form-group">
              <label htmlFor="proprtyid">Property ID</label>
              <input
                type="text"
                className="form-control"
                id="proprtyid"
                required
                value={propertyid}
                onChange={(e) => {
                  setPropertyid(e.target.value);
                }}
                name="proprtyid"
              />
            </div>

            <div className="form-group">
              <label htmlFor="unitno">Unit No.</label>
              <input
                type="text"
                className="form-control"
                id="unitno"
                required
                value={unitNo}
                onChange={(e) => {
                  setUnitNo(e.target.value);
                }}
                name="unitno"
              />
            </div>

            <div className="form-group">
              <label htmlFor="pay">Payment amount</label>
              <input
                type="text"
                className="form-control"
                id="pay"
                required
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                name="pay"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Payment Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                name="description"
              />
            </div>

            <button onClick={savePayment} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    </>
  )
}