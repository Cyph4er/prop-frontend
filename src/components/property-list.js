import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import PropertyDataService from '../services/property.service';

export default function PropertyList(){
  //mockdata to be replaced with database data link
  const [mockData, setMockData] = useState();
  const [searchtxt, setSearchtxt] = useState();

  useEffect(()=>{
    setMockData([
      {
        id: 1,
        name: 'Johns house',
        location: 'Bulawayo',
        accomtype: 'short-term',
        address: 'Block 14',
        area: 'Mpopoma',
      },
      {
        id: 2,
        name: 'Doe house',
        location: 'Bulawayo',
        accomtype: 'long-term',
        address: 'Block 6',
        area: 'Mpopoma',
      },
      {
        id: 3,
        name: 'Sweets house',
        location: 'Bulawayo',
        accomtype: 'short-term',
        address: 'Block 17',
        area: 'Mpopoma',
      },
    ]);
    
    // retrieveProperties();
  },[])

  // function retrieveProperties() {
  //   PropertyDataService.getAll().then(response => {
  //       setMockData(response.data);
  //       console.log(response.data);
  //   }).catch(e => {
  //       console.log(e);
  //   });
  // }

  return(
    <>
    <div className="row mt-4 mb-4">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchtxt}
            onChange={(e) => {
              setSearchtxt(e.target.value);
            }}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={()=>{/*create search function */}}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <Link
          className="btn btn-outline-secondary"
          to={"/property-add"}
        >
          Add property
        </Link>
      </div>
    </div>

    <h3>Property list</h3>
    <div className="table-responsive">
      <table className="table table-striped table-md">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Accom Type</th>
            <th scope="col">Address</th>
            <th scope="col">Area</th>
          </tr>
        </thead>
        <tbody>
          {mockData && mockData.map((property) => (
            <tr>
              <td>{property.id}</td>
              <td>{property.name}</td>
              <td>{property.location}</td>
              <td>{property.accomtype}</td>
              <td>{property.address}</td>
              <td>{property.area}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}