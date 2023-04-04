import React from "react";
import CommonCauseOfDeath from "../../component/HomePage/commonCuaseOfDeath";
import CauseOfDeath from "../../component/HomePage/cuaseofdeath";
import DiscoverySection from "../../component/HomePage/Discovery";
import KeyEvent from "../../component/HomePage/KeyEvent";
import "./home.css";

function AppHome() {
  return (
    <div className="home-section">
      <h1 className="main-heading">
        Every Family <span> has a story</span>
      </h1>
      <p className="normal-text text-center mt-3 pt-2">
        Bring to life your family's history by exploring the lives of those that
        came before you.
      </p>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn green-btn">View Your Family Tree</button>
      </div>

      {/* Discovery */}
      <DiscoverySection />
      <CauseOfDeath />
      <KeyEvent />
      <CommonCauseOfDeath />
    </div>
  );
}

export default AppHome;
