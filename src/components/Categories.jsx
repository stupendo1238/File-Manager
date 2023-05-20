import React, { useState, useEffect } from "react"

export default function Categories(props) {
  const [data, setData] = useState([])

  const [filtereddata, setFiltereddata] = useState([])
  // Filter the data as per the Label
  function handleFilter(e) {
    props.setChange(false)
    if (filtereddata.includes(e.target.value)) {
      let index = filtereddata.findIndex((ele) => {
        return ele === e.target.value
      })
      filtereddata.splice(index, 1)
      setFiltereddata(filtereddata)
      console.log(filtereddata)
    }
    else {
      setFiltereddata([...filtereddata, e.target.value])
      console.log(filtereddata)
    }
  }
  //Display the matched data on the UI
  function handleSubmit() {
    props.setStatus(true)
    console.log(filtereddata.length)
    let filtered = props.files.filter((ele) => {
      for (let i of filtereddata) {
        if (ele.Labels === i) {
          console.log("true")
          return ele
        }
      }
    })
    filtereddata.length !== 0 ? filtered.length > 0 ? props.setFile(filtered) : props.setFile([]) : props.setStatus(false)
  }
  // Fetch the data from an API
  async function fetch_data() {
    let data = await fetch("https://646312614dca1a661353d0ee.mockapi.io/api/Category")
    let parsedData = await data.json()
    setData(parsedData)
  }
  useEffect(() => {
    fetch_data()
  }, [])
  return (
    <>
      <div className="category">
        <h5 className="mb-3">Categories <i className="fab fa fa-check-square mr-3"></i></h5>
        <div>
          {
            data.map((ele, i) => {
              return (
                <div key={i}>
                  <strong><li className="mb-1 mt-2">{ele.Name}</li></strong>
                  {ele.Labels.map((element, i) => {
                    return (
                      <div key={i}>
                        <li><input type="checkbox" onChange={handleFilter} value={element.Name}></input>
                          <label>{element.Name}</label></li>
                      </div>
                    )
                  })}
                </div>
              )
            })
          }
        </div>
        <button className="lastbtn" onClick={handleSubmit}>Show Results</button>
      </div>
    </>
  )
}