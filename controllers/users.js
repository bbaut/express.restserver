import { request, response } from "express";

const usersGet = (req = request,res = response) => {

    const query = req.query

    res.json({
        msg: 'get API - controller',
        query
    });
}

const usersPost = (req,res) => {
    const {name, age} = req.body;

    res.json({
        msg: 'post API - controller',
        name,
        age
    });
}

const usersPut = (req,res = response) => {
    const {id} = req.params;

    res.json({
        msg: 'put API - controller',
        id
    });
}
const usersDelete = (req,res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
}

export {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
}