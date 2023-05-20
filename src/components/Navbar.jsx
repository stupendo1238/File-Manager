import React, { useState } from "react"

export default function Navbar(props) {
  const [name, setName] = useState("")
  const [owner, setOwner] = useState("")
  const [type, setType] = useState("")
  // Handle input changes from the user
  function handleChange1(e) {
    setName(e.target.value)
  }
  function handleChange2(e) {
    setOwner(e.target.value)
  }
  function handleChange4(e) {
    setType(e.target.value)
  }
  // Add new files
  function handleAdd() {
    props.setFiles([...props.files, { "Name": name ? name : "---", "Owner": owner ? owner : "---", "Type": type ? type : "---" }])
    setName("")
    setOwner("")
    setType("")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <h4 className="nav-link my-auto ml-3">File Manager</h4>
          </li>
        </ul>
        <div className="form-inline my-1 mr-2 my-lg-0">
          <button className="btn my-2 my-sm-0" data-toggle="modal" data-target="#exampleModalCenter"><span style={{ fontSize: "25px" }}> + </span>Upload</button>

          <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body d-flex flex-column">
                  <label>Name</label>
                  <input className="data" type="text" placeholder="Enter name" onChange={handleChange1} value={name}></input>
                  <label>Owner</label>
                  <input className="data" placeholder="Enter Image URL" type="text" onChange={handleChange2} value={owner}></input>
                  <label>Type</label>
                  <input className="data" type="text" onChange={handleChange4} placeholder="Enter Type" value={type}></input>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button onClick={handleAdd} type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}