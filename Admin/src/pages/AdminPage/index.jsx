import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './index.scss'
import FormAdd from '../../components/FormAdd' 
const AdminPage= () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [property, setProperty] = useState(null)
  async function getData() {
    const res = await axios("http://localhost:3000/product")
    setData(res.data)
  }
  async function deleteData(id) {
    const res = await axios.delete(`http://localhost:3000/product/${id}`)
    getData()
  }
  async function editData(id) {
    const res = await axios.update(`http://localhost:3000/product/${id}`)
    getData()
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <FormAdd getData={getData} />
      <div className="filter">
        <input type="search" value={search} placeholder='search' onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => setProperty({ name: "title", asc: null })}>Default</button>
        <button onClick={() => setProperty({ name: "title", asc: true })}>A-Z</button>
        <button onClick={() => setProperty({ name: "title", asc: false })}>Z-A</button>
        <button onClick={() => setProperty({ name: "price", asc: true })}>Inc</button>
        <button onClick={() => setProperty({ name: "price", asc: false })}>Dec</button>
        <button onClick={() => setProperty({ name: "title", asc: null })}>def</button>
      </div>
      <table>
        <thead>
          <tr>
            <td>Image</td>
            <td>Title</td>
            <td>Category</td>
            <td>Price</td>
            <td>Delete</td>
            <td>Edit</td>


          </tr>
        </thead>
        <tbody>
          {data && data

            .filter(x => x.title.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
              if (property && property.asc === true) {
                return (a[property.name] < b[property.name]) ? -1 : ((b[property.name] < a[property.name]) ? 1 : 0)
              } else if (property && property.asc === false) {
                return (a[property.name] > b[property.name]) ? -1 : ((b[property.name] > a[property.name]) ? 1 : 0)
              } else {
                return 0;
              }

            })





            .map(x =>
              <tr>
                <th><img src={x.image} alt="" /></th>
                <th>{x.title}</th>
                <th>{x.category}</th>
                <th>{x.price}</th>
                <th><button onClick={() => deleteData(x._id)}>Delete</button></th>
                <th><button onClick={() => editData(x._id)}>Edit</button></th>
              </tr>
            )}
        </tbody>
      </table>
    </>
  )
}

export default AdminPage