import './App.css'
import React, { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Categories from './components/Categories'
import Files from './components/Files'
export default function App() {
  const [files, setFiles] = useState([])
  const [change, setChange] = useState(false)
  const [file, setFile] = useState([])
  const [label, setLabel] = useState("")
  const [status, setStatus] = useState(false)
  // Fetch data from an Api
  async function fetch_data() {
    let data = await fetch("https://646312614dca1a661353d0ee.mockapi.io/api/Files")
    let parsedData = await data.json()
    console.log(parsedData)
    setFiles(parsedData)
  }
  useEffect(() => {
    fetch_data()
  }, [])
  return (
    <>
      <Navbar files={files} setFiles={setFiles} label={label} setLabel={setLabel} />
      <Sidebar />
      <Categories files={files} setFiles={setFiles} file={file} setFile={setFile} status={status} setStatus={setStatus} change={change} setChange={setChange} />
      <Files files={files} setFiles={setFiles} label={label} setLabel={setLabel} file={file} setFile={setFile} status={status} setStatus={setStatus} change={change} setChange={setChange} />
    </>
  )
}
