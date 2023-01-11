import axios from 'axios';
import React, { useState } from 'react'
import { redirect, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function UpdateCategory() {

    const [name, setName] = useState('');
    const { id } = useParams();
    
    const changeName = (e) => {
        setName(e.target.value);
    }
    useEffect(() => {
        axios.get(`http://localhost:9999/category/${id}`)
            .then((res) => {
                setName(res.data[0]);
            }).catch((err) => {
                console.log(err);
            })
    }, [id]);

    const postData = (e) => {
        e.preventDefault();
        // const data = {
        //     name: name
        // }
        // axios.post(urlAPI, data)
        //     .then((res) => {
        //         console.log(res.data);
        //         return redirect('/category')
        //     }).catch((err) => {
        //         console.log(err);
        //     })
    };


    return (
        <div className='container p-4'>
            <form action='' onSubmit={(e) => postData(e)}>
                <div className="form-group">
                    <label htmlFor="ten_danh_muc">Name</label>
                    <input type="text" defaultValue={name.ten_danh_muc} name="ten_danh_muc" onChange={(e) => changeName(e)} className="form-control" placeholder="Ten Danh Muc" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default UpdateCategory