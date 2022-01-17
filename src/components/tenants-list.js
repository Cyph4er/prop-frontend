import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function TenantsList(){
  //mockdata to be replaced with database data link
  const [mockData, setMockData] = useState();
  const [searchtxt, setSearchtxt] = useState();

  useEffect(()=>{
    setMockData([
      {
        id: 1,
        name: 'Johns Sam',
        idno: '21 3006787M55',
        unitno: 5,
        accomtype: 'single',
        school: 'NUST',
        homeaddress: 'Block 14 Mpopoma',
        contact: '0774567332',
        lease: '4 months',
        health: 'healthly',
        leasetyp: 'short-term',
        rent: 100,
      },
      {
        id: 2,
        name: 'Doe Fin',
        idno: '01 7800767M88',
        unitno: 9,
        accomtype: 'coupled',
        school: 'LSU',
        homeaddress: 'Mutare',
        contact: '078568554',
        lease: '4 months',
        health: 'healthly',
        leasetyp: 'short-term',
        rent: 200,
      },
      {
        id: 3,
        name: 'Sweets Mov',
        idno: '65 3556456L05',
        unitno: 5,
        accomtype: 'single',
        school: 'MSU',
        homeaddress: 'Block 14 Mpopoma',
        contact: '0774524680',
        lease: '2 months',
        health: 'healthly',
        leasetyp: 'short-term',
        rent: 50,
      },
    ]);
  
  },[])

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
          to={"/tenant-add"}
        >
          Add tenant
        </Link>
      </div>
    </div>

    <h3>Tenant list</h3>
    <div className="table-responsive">
      <table className="table table-striped table-md">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">ID No.</th>
            <th scope="col">Unit No.</th>
            <th scope="col">Accom Type</th>
            <th scope="col">School</th>
            <th scope="col">Home Address</th>
            <th scope="col">Contact</th>
            <th scope="col">Lease</th>
            <th scope="col">Health</th>
            <th scope="col">Lease Typ</th>
            <th scope="col">Rent</th>
          </tr>
        </thead>
        <tbody>
          {mockData && mockData.map((tenant) => (
            <tr>
              <td>{tenant.id}</td>
              <td>{tenant.name}</td>
              <td>{tenant.idno}</td>
              <td>{tenant.unitno}</td>
              <td>{tenant.accomtype}</td>
              <td>{tenant.school}</td>
              <td>{tenant.homeaddress}</td>
              <td>{tenant.contact}</td>
              <td>{tenant.lease}</td>
              <td>{tenant.health}</td>
              <td>{tenant.leasetyp}</td>
              <td>{tenant.rent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}