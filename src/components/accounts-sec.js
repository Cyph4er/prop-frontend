import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AccountsSection(){
  //mockdata to be replaced with database data link
  const [mockData, setMockData] = useState();
  const [searchtxt, setSearchtxt] = useState();

  useEffect(()=>{
    setMockData([
      {
        id: 1,
        tenant_id: '21 3006787M55',
        property_id: 2,
        unitno: 5,
        paid: 100,
        description: 'rent',
        date: '11/4/2020',
      },
      {
        id: 2,
        tenant_id: 'n/a',
        property_id: 2,
        unitno: 8,
        paid: 50,
        description: 'maintainance',
        date: '11/7/2020',
      },
      {
        id: 3,
        tenant_id: '65 3556456L05',
        property_id: 3,
        unitno: 11,
        paid: 150,
        description: 'rent',
        date: '11/8/2020',
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
          to={"/rent-pay"}
        >
          Rent payment
        </Link>
      </div>
      <div className="col-md-4">
        <Link
          className="btn btn-outline-secondary"
          to={"/rent-pay"}
        >
          Other payments
        </Link>
      </div>
    </div>

    <h3>Accounts history table</h3>
    <div className="table-responsive">
      <table className="table table-striped table-md">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tenant ID</th>
            <th scope="col">Property ID</th>
            <th scope="col">Unit No.</th>
            <th scope="col">Payment</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {mockData && mockData.map((account) => (
            <tr>
              <td>{account.id}</td>
              <td>{account.tenant_id}</td>
              <td>{account.property_id}</td>
              <td>{account.unitno}</td>
              <td>{account.paid}</td>
              <td>{account.description}</td>
              <td>{account.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}