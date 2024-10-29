import React, { useState, useEffect } from 'react';
import "../Admin/assete/css/viewdetails.css";
import { ViewDetailsApi , deleteDetailApi} from '../service/Api';
import Adminheader from './Adminheader';

const Viewdetails = () => {
    const [details, setDetails] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [detailToDelete, setDetailToDelete] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ViewDetailsApi();
                if (response && response.contact_details) {
                    setDetails(response.contact_details.reverse());
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async () => {
        try {
            await deleteDetailApi(detailToDelete);
            setDetails(details.filter(detail => detail.id !== detailToDelete));
            setShowPopup(false);
        } catch (error) {
            console.error('Error deleting detail:', error);
        }
    };

    const openDeletePopup = (id) => {
        setDetailToDelete(id);
        setShowPopup(true);
    };

    const closeDeletePopup = () => {
        setShowPopup(false);
    };
  return (
    <>
    <Adminheader/>
    <div className='view_cont_div'>

   
     <div className='ad_det'>
                <h2>Contact Details</h2>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Service Type</th>
                            <th>Message</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.map((detail, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{detail.name}</td>
                                <td>{detail.email}</td>
                                <td>{detail.phone}</td>
                                <td>{detail.service_type}</td>
                                <td style={{ maxWidth: '300px', maxHeight: '100px', overflow: 'auto' }}>{detail.message}</td>
                                <td><button onClick={() => openDeletePopup(detail.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            
            {showPopup && (
                <div className="popup-container">
                    <div className="popup">
                        <h3>Are you sure you want to delete?</h3>
                        <div className="popup-buttons">
                            <button onClick={handleDelete}>Delete</button>
                            <button onClick={closeDeletePopup}>Cancel</button>
                        </div>
                    </div>
                </div>
                 
            )}
            </div>
    </>
  )
}

export default Viewdetails