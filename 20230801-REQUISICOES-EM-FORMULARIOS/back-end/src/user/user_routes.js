import UserDB from "./user_db.js";
import {Router} from 'express';

export const userRouter = Router();

function executeAndRespond(responseObj, func)
{
    try
    {
        let result = func();
        responseObj.status(200).send(result);
    }
    catch(error)
    {
        responseObj.status(400).send(error.message);
    }
}

//--
// User CRUD
//--

//Create
userRouter.post('/user', function (req, res) 
{
    executeAndRespond(res, () => UserDB.add(req.body.name, req.body.email, req.body.password));
});

//Delete
userRouter.delete('/user/:id', function (req, res) 
{
    executeAndRespond(res, () => UserDB.remove(parseInt(req.params.id)));
});

//Read
userRouter.get('/user/:id', function (req, res) 
{
    executeAndRespond(res, () => UserDB.find(parseInt(req.params.id)));
});

//Update
userRouter.put('/user/:id', function (req, res)
{
    executeAndRespond(res, () => UserDB.update(parseInt(req.params.id), req.body.name, req.body.password));
});

//Read All
userRouter.get('/users', function (req, res) 
{
    executeAndRespond(res, () => UserDB.all());
});

//Login
userRouter.post('/user/login', function (req, res)
{
    executeAndRespond(res, () => {
        let user = UserDB.findByEmail(req.body.email);
        if (user.password !== req.body.password)
        {
            throw new Error("Invalid password");
        }

        return user;
    });
});
