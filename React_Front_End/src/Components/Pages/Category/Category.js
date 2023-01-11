import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
function Category() {

    const [listCategory, setListCategory] = useState([]);
    const [check, setCheckDelete] = useState(true);

    const deleteDataAPI = (id) => {
        axios.delete(`http://localhost:9999/category/${id}`);
        setCheckDelete(false);
    }

    useEffect(() => {
        axios.get('http://localhost:9999/category')
            .then((res) => {
                console.log(res.data);
                setListCategory(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [check]);

    return (
        <div className='container p-4'>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listCategory.map((items, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{items.ten_danh_muc}</td>
                                    <td className="w-25">
                                        <Link to={`/category/edit/${items.id}`} className="btn btn-outline-success rounded-0">Update</Link>
                                        <button onClick={() => deleteDataAPI(items.id)} className="btn btn-outline-danger rounded-0">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Category