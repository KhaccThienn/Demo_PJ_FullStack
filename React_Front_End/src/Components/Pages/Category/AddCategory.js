import React from 'react'
import { useState } from 'react';
import CategoryService from '../../../Services/CategoryService';

function AddCategory() {

    const initialCategoryState = {
        ten_danh_muc: ""
    };
    const [category, setCategory] = useState(initialCategoryState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCategory({ ...category, [name]: value });
    };

    const saveCategory = () => {
        var data = {
            ten_danh_muc: category.ten_danh_muc,

        };

        CategoryService.create(data)
            .then(response => {
                setCategory({
                    ten_danh_muc: response.data.ten_danh_muc
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newCategory = () => {
        setCategory(initialCategoryState);
        setSubmitted(false);
    };

    return (
        <div className="container">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newCategory}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="ten_danh_muc">Ten Danh Muc</label>
                        <input
                            type="text"
                            className="form-control"
                            id="ten_danh_muc"
                            required
                            placeholder='Ten Danh Muc ?'
                            value={category.ten_danh_muc}
                            onChange={handleInputChange}
                            name="ten_danh_muc"
                        />
                    </div>

                    <button onClick={saveCategory} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    )
}

export default AddCategory