import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import UserDataService from '../services/user.service';

export default function PropertyList(){
  //mockdata to be replaced with database data link
  const [mockData, setMockData] = useState();
  const [searchtxt, setSearchtxt] = useState();

  useEffect(()=>{
    setMockData([
      {
        id: 1,
        name: 'Johns house',
        mobileNumber: '+263 737 7474',
        emailAddress: 'example1@example.com',
      },
      {
        id: 2,
        name: 'Peter Greenleaf',
        mobileNumber: '+263 737 7664',
        emailAddress: 'example2@example.com',
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
          to={"/AddUser"}
        >
          Add User
        </Link>
      </div>
    </div>

    <h3>Usser list</h3>
    <div className="table-responsive">
      <table className="table table-striped table-md">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">id</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Email Address</th>
          </tr>
        </thead>
        <tbody>
          {mockData && mockData.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.id}</td>
              <td>{user.mobileNumber}</td>
              <td>{user.emailAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}