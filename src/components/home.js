import React from "react";
import '../resources/css/home.css';
import { Link } from "react-router-dom";
import Propic from '../resources/img/property-icon.png';
import Tenantic from '../resources/img/tenants.png';
import Accic from '../resources/img/account.png';
import Creditic from '../resources/img/credits.png';
import Docic from '../resources/img/documents.png';
import Mailic from '../resources/img/smsemail.png';
import Faqic from '../resources/img/faq.png';

export default function Home(){
  return(
    <>
    {/* <div className="col-md-9"> */}
      <div className="row">
        <Link className="col-md-3 guidelink" to={"/property-list"}>
          <img
            className="img-responsive hicon"
            src={Propic}
            alt=""
          />
          <p className="text-center fw-bold greenc">Properties</p>
        </Link>
        <Link className="col-md-3 guidelink" to={"/tenant-list"}>
          <img
            className="img-responsive hicon "
            src={Tenantic}
            alt=""
          />
          <p className="text-center fw-bold greenc">Tenants</p>
        </Link>
        <Link className="col-md-3 guidelink" to={"/accounts-sec"}>
          <img
            className="img-responsive hicon"
            src={Accic}
            alt=""
          />
          <p className="text-center fw-bold greenc">Accounting</p>
        </Link>
        <Link className="col-md-3 guidelink" to={"/creditors"}>
          <img
            className="img-responsive hicon"
            src={Creditic}
            alt=""
          />
          <p className="text-center fw-bold greenc">Credit Control Centre</p>
        </Link>
        <Link className="col-md-3 guidelink" to={''}>
          <img
            className="img-responsive hicon"
            src={Docic}
            alt=""
          />
          <p className="text-center fw-bold greenc">Documents</p>
        </Link>
        <Link className="col-md-3 guidelink" to={''}>
          <img
            className="img-responsive hicon"
            src={Mailic}
            alt=""
          />
          <p className="text-center fw-bold greenc">E-mail/SMS</p>
        </Link>
        <Link className="col-md-3 guidelink" to={''}>
          <img
            className="img-responsive hicon"
            src={Faqic}
            alt=""
          />
          <p className="text-center fw-bold greenc">FAQs</p>
        </Link>
      </div>
    {/* </div> */}
    </>
  )
}