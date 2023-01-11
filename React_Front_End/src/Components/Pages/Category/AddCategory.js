import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { redirect } from 'react-router-dom';

function AddCategory() {
    const [name, setName] = useState('');
    const urlAPI = "http://localhost:9999/category"

    const postData = (e) => {
        e.preventDefault();


        axios.post(urlAPI, {name}, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                console.log(res.data);
                return redirect('/category')
            }).catch((err) => {
                console.log(err);
            })
    };


    return (
        <div className='container p-4'>
            <form action='' onSubmit={(e) => postData(e)}>
                <div className="form-group">
                    <label htmlFor="ten_danh_muc">Name</label>
                    <input type="text" name="ten_danh_muc" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Ten Danh Muc" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddCategory