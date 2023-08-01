import Message from "./message.js";
import UserDB from "../user/user_db.js";

let messagesList = [];
let nextID = 1;

export default class MessageDB
{
    //returns the new message
    //throws an error if user does not exist
    static add(userId, title, description)
    {
        UserDB.find(userId);
        
        let newMessage = new Message(nextID++, userId, title, description);
        messagesList.push(newMessage);
        return newMessage;    
    }

    //returns the removed message
    //throws an error if message does not exist
    static remove(id) 
    {
        let index = messagesList.findIndex((message) => message.id === id);
        if (index === -1)
        {
            throw new Error("Message with id '" + id + "' does not exist");
        }

        let deletedMessages = messagesList.splice(index, 1);
        return deletedMessages[0];    
    }

    //finds a message by ID
    //throws an error if message does not exist
    static find(id)
    {
        let message = messagesList.find((message) => message.id === id);
        if (!message)
        {
            throw new Error("Message with id '" + id + "' does not exist");
        }
        return message;    
    }

    //finds all user's messages
    //returns an array
    static findAll(userId)
    {
        let messages = messagesList.filter((message) => message.userId === userId);
        return messages;
    }

    //Updates a message data
    //Undefined properties are not updated
    static update(id, title, description)
    {
        let message = this.find(id);

        if (title !== undefined)
            message.title = title;
     
        if (description !== undefined)
            message.description = description;
     
        return message;
    }
}

//fill DB with some data
MessageDB.add(1, "Wellcome John Doe", "We wellcome you with this first message");
