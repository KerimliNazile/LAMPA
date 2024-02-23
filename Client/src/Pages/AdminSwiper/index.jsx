import axios from 'axios'
import React, { useEffect, useState } from 'react'

import FormikMarketing from '../../Components/FormikMarketing'
import './index.scss'
const AdminMarketing= () => {

  const [data, setData] = useState([])
  const [editedItem, setEditedItem] = useState(null);
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [property, setProperty] = useState(null)
  // const [updatedData, setUpdatedData] = useState(null)
  async function getData() {
    const res = await axios("http://localhost:3000/logo")
    setData(res.data)
  }
  async function deleteData(id) {
    const res = await axios.delete(`http://localhost:3000/logo/${id}`)
    getData()
  }

  async function editData(id) {
    // Fetch the data for the item you want to edit
    const res = await axios(`http://localhost:3000/logo/${id}`);
    setEditedItem(res.data);
    setShowModal(true);
  }

  async function saveEditedData() {
    // Send a PUT request to update the data on the server
    const res = await axios.put(`http://localhost:3000/logo/${editedItem._id}`, editedItem);
    getData();
    setShowModal(false);
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <FormikMarketing getData={getData}  />
      
      <table>
        <thead>
          <tr>
            <td>Image</td>

            
            <td>Delete</td>
            <td>Edit</td>
          </tr>
        </thead>
        <tbody>
          {data && data

           




            .map(x =>
              <tr>
                <th><img src={x.image} alt="" /></th>

                
              
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

export default AdminMarketing