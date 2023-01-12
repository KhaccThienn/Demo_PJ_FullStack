import http from "../http-common";

const getAll = () => {
    return http.get("/category");
};

const getByID = (id) => {
    return http.get(`/category/${id}`);
};

const create = (data) => {
    return http.post("/category", data);
};

const edit = (id) => {
    return http.get(`/category/${id}/edit`);
};

const update = (id, data) => {
    return http.put(`/category/${id}`, data);
};

const remove = (id) => {
    return http.delete(`/category/${id}`)
};

const CategoryService = {
    getAll,
    getByID,
    create,
    edit,
    update,
    remove
};

export default CategoryService;