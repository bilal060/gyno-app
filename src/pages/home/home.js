import React from "react";
import CommonCauseOfDeath from "../../component/HomePage/commonCuaseOfDeath";
import CauseOfDeath from "../../component/HomePage/cuaseofdeath";
import DiscoverySection from "../../component/HomePage/Discovery";
import KeyEvent from "../../component/HomePage/KeyEvent";
import "./home.css";
import SimpleSlider from "../../component/HomePage/slider";
import Tablefilter from "../../component/Table";
import Model from "../../component/Model/Model";
import ContactUsForm from "../../component/HomePage/ContactUs";
import LogoImg from "../../assets/image/logo.jpg";

function AppHome() {
  return (
    <div className="home-section">
      <div className="px-lg-3 px-md-4 px-sm-5 px-4">
        <h1 className="main-heading">
          Bringing your Family Past <span>To The Present</span>
        </h1>
        <p className="normal-text text-center mt-3 pt-2">
          Bring to life your family's history by exploring the lives of those
          that came before you.
        </p>
        <div className="d-flex justify-content-center mt-5">
          <button className="btn green-btn">View Your Family Tree</button>
        </div>
      </div>
      <SimpleSlider />

      <div className="d-flex justify-content-center">
        <Model />
      </div>
      <div className="mt-5 p-5">
        <Tablefilter />
      </div>


        <DiscoverySection />

        <CauseOfDeath />

        <KeyEvent />
      <CommonCauseOfDeath />
        <div className="mt-5 p-5">
            <ContactUsForm/>
        </div>
      <footer className="container p-4 rounded">
            <div className="d-lg-flex justify-content-between">
                <div>
                    <img src={LogoImg} width={52} />
                </div>
                <div className="copyright">
                    <p>developed and maintained by Past Links</p>
                </div>
                <div>
                    <ul className="d-flex gap-3 list-unstyled">
                        <li><a href="https://www.facebook.com/pastlinksgenealogyservices"><i style={{fontSize: '40px;'}} className="bi bi-facebook"></i></a></li>

                    </ul>
                </div>
            </div>
        </footer>

    </div>
  );
}

export default AppHome;
