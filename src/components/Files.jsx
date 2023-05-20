import React, { useState, useEffect } from "react"

export default function Files(props) {
  const [search, setSearch] = useState("")
  const [searchedFiles, setSearchedFiles] = useState([])
  //Delete a particular file and data.
  function handleDelete(index) {
    props.setChange(false)
    let new_data = props.status ? props.file.filter((_, i) => {
      return i !== index
    }) : props.files.filter((_, i) => {
      return i !== index
    })
    props.status ? props.setFile(new_data) : props.setFiles(new_data)
  }
  //Search for the file through the search bar
  function handleSearch(e) {
    setSearch(e.target.value)
    props.setChange(true)
  }
  function handleFind() {
    let searched_files = props.files.filter((ele) => {
      return search === "" ? ele : ele.Name.includes(search)
    })
    setSearchedFiles(searched_files)
  }
  useEffect(() => {
    handleFind()
  }, [search])
  //Setting Labels of each file.
  props.files.map((ele) => {
    if (ele.id % 2 === 0 && ele.id % 3 === 0) {
      ele.Labels = "Label 6"
    }
    else if (ele.id % 2 === 0 && ele.id % 5 === 0) {
      ele.Labels = "Label 5"
    }
    else if (ele.id % 2 === 0) {
      ele.Labels = "Label 1"
    }
    else if (ele.id % 5 === 0) {
      ele.Labels = "Label 3"
    }
    else if (ele.id % 3 === 0) {
      ele.Labels = "Label 2"
    }
    else {
      ele.Labels = "Label 4"
    }
  })
  return (
    <>
      <div className="search">
        <input onChange={handleSearch} className="input" placeholder="🔍Search by name" type="search"></input>
      </div>
      <div className="files">
        <h5 style={{ fontWeight: "bold", color: "grey" }}>All Items</h5>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Owner</th>
              <th>Labels</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.change ? searchedFiles.map((ele, i) => {
              return (
                <tr key={i}>
                  <td>{ele.Name}</td>
                  <td><img className="img2" src={ele.Owner} alt=""></img></td>
                  <td>{ele.Labels}</td>
                  <td>{ele.Type}</td>
                  <td><button onClick={() => handleDelete(i)} className="btn3"><i className="fa fa-trash"></i></button></td>
                </tr>
              )
            }) : props.status ? props.file.map((ele, i) => {
              return (
                <tr key={i}>
                  <td>{ele.Name ? ele.Name : "......."}</td>
                  <td><img className="img2" src={ele.Owner} alt=""></img></td>
                  <td>{ele.Labels}</td>
                  <td>{ele.Type ? ele.Type : "..."}</td>
                  <td><button onClick={() => handleDelete(i)} className="btn3"><i className="fa fa-trash"></i></button></td>
                </tr>
              )
            }) : props.files.map((ele, i) => {
              return (
                <tr key={i}>
                  <td>{ele.Name ? ele.Name : "......."}</td>
                  <td><img className="img2" src={ele.Owner} alt=""></img></td>
                  <td>{ele.Labels}</td>
                  <td>{ele.Type ? ele.Type : "..."}</td>
                  <td><button onClick={() => handleDelete(i)} className="btn3"><i className="fa fa-trash"></i></button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}