import React from "react";
import "../Model/model.css";
const Model = () => {
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Launch static backdrop modal
        </button>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="staticBackdropLabel">
                  Modal title
                </h5> */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form className="discovey-form row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Grave</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Grave"
                      name="Grave"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Enter Surname</label>
                    <input
                      type="text"
                      className="form-input"                                                               
                      placeholder="Enter Surname"
                      name="Surname"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Enter FirstName</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Ancestor's First Name"
                      name="firstName"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Enter Serial Number</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter SerialNumber"
                      name="SerialNumber"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Enter Regiment</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter Regiment"
                      name="Regiment"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Rank</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter Rank"
                      name="Rank"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Chose an Image</label>
                    <input
                      type="file"
                      className="form-input"
                      placeholder="Ancestor's First Name"
                      name="firstName"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Enter note</label>
                    <textarea
                      type="text"
                      className="form-input"
                      placeholder="Enter note ....."
                      name="note"
                    />
                  </div>
                  <div class="d-grid col-6 mx-auto">
                    <button class="register-btn" type="button">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              {/* <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Understood
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
