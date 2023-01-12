import React from 'react'
import { useState, useEffect } from 'react';
import CategoryService from '../../../Services/CategoryService';
import { useNavigate, useParams } from 'react-router-dom';
function UpdateCategory() {

    const initialCategoryState = {
        ten_danh_muc: ""
    };

    const [category, setCategory] = useState(initialCategoryState);
    const [name, setName] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCategory({ ...category, [name]: value });
    };

    useEffect(() => {
        CategoryService.getByID(id).then((res) => {
            console.log(res.data);
            setName(res.data[0]);
        }).catch((err) => {
            console.log(err);
        })
    }, [id]);

    const saveCategory = () => {
        var data = {
            ten_danh_muc: category.ten_danh_muc,
        };

        CategoryService.update(id, data)
            .then(response => {
                setCategory({
                    ten_danh_muc: response.data.ten_danh_muc
                });
                console.log(response.data);
                navigate('/category');
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="container">
            <div>
                <div className="form-group">
                    <label htmlFor="ten_danh_muc">Ten Danh Muc</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ten_danh_muc"
                        required
                        defaultValue={name.ten_danh_muc}
                        onChange={handleInputChange}
                        name="ten_danh_muc"
                    />
                </div>

                <button onClick={saveCategory} className="btn btn-success">
                    Submit
                </button>
            </div>

        </div>
    )
}

export default UpdateCategory;