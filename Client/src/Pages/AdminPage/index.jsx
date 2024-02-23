import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './index.scss'
import FormAdd from '../../Components/ShopComponents/FormAdd'
const AdminPage = () => {

  const [data, setData] = useState([])
  const [editedItem, setEditedItem] = useState(null);
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [property, setProperty] = useState(null)
  // const [updatedData, setUpdatedData] = useState(null)
  async function getData() {
    const res = await axios("http://localhost:3000/product")
    setData(res.data)
  }
  async function deleteData(id) {
    const res = await axios.delete(`http://localhost:3000/product/${id}`)
    getData()
  }

  async function editData(id) {
    // Fetch the data for the item you want to edit
    const res = await axios(`http://localhost:3000/product/${id}`);
    setEditedItem(res.data);
    setShowModal(true);
  }

  async function saveEditedData() {
    // Send a PUT request to update the data on the server
    const res = await axios.put(`http://localhost:3000/product/${editedItem._id}`, editedItem);
    getData();
    setShowModal(false);
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <FormAdd getData={getData}  />
      <div className="filterr">
        <input type="search" value={search} placeholder='search' onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => setProperty({ name: "title", asc: null })}>Default</button>
        <button onClick={() => setProperty({ name: "title", asc: true })}>A - Z</button>
        <button onClick={() => setProperty({ name: "title", asc: false })}>Z - A</button>
        <button onClick={() => setProperty({ name: "price", asc: true })}>Increase</button>
        <button onClick={() => setProperty({ name: "price", asc: false })}>Decrease</button>
        {/* <button onClick={() => setProperty({ name: "title", asc: null })}>def</button> */}
      </div>
      <table>
        <thead>
          <tr>
            <td>Image</td>

            <td>Title</td>
            <td>Category</td>
            <td>Size</td>
            <td>Brand</td>
            <td>Type</td>
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
                <th>{x.size}</th>
                  <th>{x.by}</th>
                <th>{x.formtyp}</th>
              
                <th><button onClick={() => deleteData(x._id)}>Delete</button></th>
                <th><button onClick={() => editData(x._id)}>Edit</button></th>
              </tr>
            )}
             {showModal && (
        <div className="modal">
          <h2>Edit</h2>
          <input
            type="text"
            value={editedItem.image}
            onChange={(e) => setEditedItem({ ...editedItem, image: e.target.value })}
          />
          <input
            type="text"
            value={editedItem.title}
            onChange={(e) => setEditedItem({ ...editedItem, title: e.target.value })}
          />
           <input
            type="number"
            value={editedItem.price}
            onChange={(e) => setEditedItem({ ...editedItem, price: e.target.value })}
          />
           <input
            type="text"
            value={editedItem.category}
            onChange={(e) => setEditedItem({ ...editedItem, category: e.target.value })}
          />
          <input
            type="text"
            value={editedItem.size}
            onChange={(e) => setEditedItem({ ...editedItem,size: e.target.value })}
          />
          <input
            type="text"
            value={editedItem.by}
            onChange={(e) => setEditedItem({ ...editedItem, by: e.target.value })}
          />
          <input
            type="text"
            value={editedItem.formtyp}
            onChange={(e) => setEditedItem({ ...editedItem, formtyp: e.target.value })}
          />
          {/* Add similar input fields for other properties */}
          <button onClick={saveEditedData}>Save</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      )}
        </tbody>
      </table>
    </>
  )
            }

export default AdminPage