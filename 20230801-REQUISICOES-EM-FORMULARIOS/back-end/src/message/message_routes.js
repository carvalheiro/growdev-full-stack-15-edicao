import MessageDB from "./message_db.js";
import { Router } from "express";

export const messageRouter = Router();

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
// Message CRUD
//--

//Create
messageRouter.post('/message', function (req, res) 
{
    executeAndRespond(res, () => MessageDB.add(parseInt(req.body.userId), req.body.title, req.body.description));
});

//Read specific message
messageRouter.get('/message/:id', function (req, res) 
{
    executeAndRespond(res, () => MessageDB.find(parseInt(req.params.id)));
});

//Read all user messages
messageRouter.get('/user_messages/:userId', function (req, res) 
{
    executeAndRespond(res, () => MessageDB.findAll(parseInt(req.params.userId)));
});

//Update
messageRouter.put('/message/:id', function (req, res)
{
    executeAndRespond(res, () => MessageDB.update(parseInt(req.params.id), req.body.title, req.body.description));
});

//Delete
messageRouter.delete('/message/:id', function (req, res) 
{
    executeAndRespond(res, () => MessageDB.remove(parseInt(req.params.id)));
});
