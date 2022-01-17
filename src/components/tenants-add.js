import React, { useState } from "react";

export default function TenantsAdd(){
  const [submitted, setSubmitted] = useState(false);
  const [tentName, setTentName] = useState();
  const [tentid, setTentid] = useState();
  const [unitNo, setUnitNo] = useState();
  const [accomType, setAccomType] = useState();
  const [school, setSchool] = useState();
  const [homaddress, setHomaddress] = useState();
  const [contact, setContact] = useState();
  const [lease, setLease] = useState();
  const [healthdet, setHealthdet] = useState();
  const [leasetyp, setLeasetyp] = useState();
  const [rent, setRent] = useState();

  function saveTenant(){
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

  function newTenant(){
    setTentName();
    setTentid();
    setUnitNo();
    setAccomType();
    setSchool();
    setHomaddress();
    setContact();
    setLease();
    setHealthdet();
    setLeasetyp();
    setRent();

    setSubmitted(false);
  }

  return(
    <>
    <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newTenant}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Tenant Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={tentName}
                onChange={(e) =>{
                  setTentName(e.target.value);
                }}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="tenantid">Tenant ID No.</label>
              <input
                type="text"
                className="form-control"
                id="tenantid"
                required
                value={tentid}
                onChange={(e) => {
                  setTentid(e.target.value);
                }}
                name="tenantid"
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
              <label htmlFor="school">College/university</label>
              <input
                type="text"
                className="form-control"
                id="school"
                required
                value={school}
                onChange={(e) => {
                  setSchool(e.target.value);
                }}
                name="school"
              />
            </div>

            <div className="form-group">
              <label htmlFor="homeaddr">Home Address</label>
              <input
                type="text"
                className="form-control"
                id="homeaddr"
                required
                value={homaddress}
                onChange={(e) => {
                  setHomaddress(e.target.value);
                }}
                name="homeaddr"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact Details</label>
              <input
                type="text"
                className="form-control"
                id="contact"
                required
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                name="contact"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lease">Lease period</label>
              <input
                type="text"
                className="form-control"
                id="lease"
                required
                value={lease}
                onChange={(e) => {
                  setLease(e.target.value);
                }}
                name="lease"
              />
            </div>

            <div className="form-group">
              <label htmlFor="healthd">Health Details</label>
              <input
                type="text"
                className="form-control"
                id="healthd"
                required
                value={healthdet}
                onChange={(e) => {
                  setHealthdet(e.target.value);
                }}
                name="healthd"
              />
            </div>

            <div className="form-group">
              <label htmlFor="leasetyp">Lease Type</label>
              <input
                type="text"
                className="form-control"
                id="leasetyp"
                required
                value={leasetyp}
                onChange={(e) => {
                  setLeasetyp(e.target.value);
                }}
                name="leasetyp"
              />
            </div>

            <div className="form-group">
              <label htmlFor="rent">Rentals</label>
              <input
                type="text"
                className="form-control"
                id="rent"
                required
                value={rent}
                onChange={(e) => {
                  setRent(e.target.value);
                }}
                name="rent"
              />
            </div>

            <button onClick={saveTenant} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    </>
  )
}