import React from "react";
import CommonCauseOfDeath from "../../component/HomePage/commonCuaseOfDeath";
import CauseOfDeath from "../../component/HomePage/cuaseofdeath";
import DiscoverySection from "../../component/HomePage/Discovery";
import KeyEvent from "../../component/HomePage/KeyEvent";
import "./home.css";
import SimpleSlider from "../../component/HomePage/slider";
import Tablefilter from "../../component/Table";
import Model from "../../component/Model/Model";

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
      <DiscoverySection />
      <div className="d-flex justify-content-center">
        <Model />
      </div>
      <div className="mt-5">
        <Tablefilter />
      </div>
      <CauseOfDeath />
      <KeyEvent />
      <CommonCauseOfDeath />
    </div>
  );
}

export default AppHome;
