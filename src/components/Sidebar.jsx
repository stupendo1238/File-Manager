import React from "react"
export default function Sidebar() {
  return (
    <>
      <div className="sidebar bg-light">
        <div className="box d-flex justify-content-center align-items-center">
          <img className="image1 mr-2 mt-1" src="stealth.png" width="45" height="45" alt="logo" />
          <h5 className="name mt-3 mr-3"><strong>Stealth</strong></h5>
        </div>
        <hr style={{ marginTop: "-0.6px" }}></hr>
        <div className="text-center">
          <button disabled={true} className="btn1"><i className="text-primary fa fa-file mr-2"></i>File Manager</button>
        </div>
      </div>
    </>
  )
}