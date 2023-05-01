import React, { useState } from "react";
import { callADDAPI } from "../../pages/CallApi";
import "../Model/model.css";

const Model = () => {
  const [Grave, setGrave] = useState("");
  const [Surname, setSurname] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [SerialNumber, setSerialNumber] = useState("");
  const [Regiment, setRegiment] = useState("");
  const [Rank, setRank] = useState("");
  const [note, setnote] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newData = {
      Grave,
      Surname,
      FirstName,
      SerialNumber,
      Regiment,
      Rank,
      note,
    };

    try {
      const result = await callADDAPI("gyno", newData);
      console.log(result.data);
      setSuccess(true);
      setGrave("");
      setSurname("");
      setFirstName("");
      setSerialNumber("");
      setRegiment("");
      setRank("");
      setnote("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="model">
        <button
          type="button"
          className="btn btn-model"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Add Record
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
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              {success && <p>Data added successfully!</p>}
              <div className="modal-body">
                <form className="discovey-form row g-3" onSubmit={handleSubmit}>
                  <div className="col-md-6">
                    <label className="form-label">Grave</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Grave"
                      name="Grave"
                      value={Grave}
                      onChange={(e) => setGrave(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Enter Surname</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter Surname"
                      name="Surname"
                      value={Surname}
                      onChange={(e) => setSurname(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Enter FirstName</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Ancestor's First Name"
                      name="firstName"
                      value={FirstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Enter Serial Number</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter SerialNumber"
                      name="SerialNumber"
                      value={SerialNumber}
                      onChange={(e) => setSerialNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Enter Regiment</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter Regiment"
                      name="Regiment"
                      value={Regiment}
                      onChange={(e) => setRegiment(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Rank</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter Rank"
                      name="Rank"
                      value={Rank}
                      onChange={(e) => setRank(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Enter note</label>
                    <textarea
                      type="text"
                      className="form-input"
                      placeholder="Enter note ....."
                      name="note"
                      value={note}
                      onChange={(e) => setnote(e.target.value)}
                      required
                    />
                  </div>
                  <div class="d-grid gap-2 col-4 mx-auto">
                    <button class="btn btn-model" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
