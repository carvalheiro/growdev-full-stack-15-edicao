import Message from "./message.js";
import UserDB from "../user/user_db.js";

let messagesList = [];
let nextID = 1;

export default class MessageDB {
  //returns the new message
  //throws an error if user does not exist
  static add(userId, title, description) {
    UserDB.find(userId);

    let newMessage = new Message(nextID++, userId, title, description);
    messagesList.push(newMessage);
    return newMessage;
  }

  //returns the removed message
  //throws an error if message does not exist
  static remove(id) {
    let index = messagesList.findIndex((message) => message.id === id);
    if (index === -1) {
      throw new Error("Message with id '" + id + "' does not exist");
    }

    let deletedMessages = messagesList.splice(index, 1);
    return deletedMessages[0];
  }

  //finds a message by ID
  //throws an error if message does not exist
  static find(id) {
    let message = messagesList.find((message) => message.id === id);
    if (!message) {
      throw new Error("Message with id '" + id + "' does not exist");
    }
    return message;
  }

  //finds all user's messages
  //returns an array
  static findAll(userId, pagina) {
    console.log(pagina);
    const itemsPerPage = 3;
    // pagina 1 -> indice 0 -> indice final 2 -> diferenca entre final e inicio = 2
    // pagina 2 -> indice 3 -> indice final 5 -> diferenca entre final e inicio = 2
    // pagina 3 -> indice 6 -> indice final 8 -> diferenca entre final e inicio = 2

    // 4 items por pagina
    // pagina 1 -> indice 0 -> indice final 3 -> diferenca entre final e inicio = 3
    // pagina 2 -> indice 4 -> indice final 7 -> diferenca entre final e inicio = 3
    // pagina 3 -> indice 8 -> indice final 11 -> diferenca entre final e inicio = 3

    // 5 items por pagina
    // pagina 1 -> indice 0 -> indice final 4 -> diferenca entre final e inicio = 4
    // pagina 2 -> indice 5 -> indice final 9 -> diferenca entre final e inicio = 4
    // pagina 3 -> indice 10 -> indice final 14 -> diferenca entre final e inicio = 4

    const indiceInicialDaNossaPagina = (pagina - 1) * itemsPerPage;
    const indiceFinalDaNossaPagina =
      indiceInicialDaNossaPagina + itemsPerPage - 1;
    let messagensTotais = messagesList.filter(
      (message) => message.userId === userId
    );
    let messages = [];
    messagensTotais.forEach(function (message, indice) {
      if (
        indice >= indiceInicialDaNossaPagina &&
        indice <= indiceFinalDaNossaPagina
      ) {
        messages.push(message);
      }
    });
    return messages;
  }

  //Updates a message data
  //Undefined properties are not updated
  static update(id, title, description) {
    let message = this.find(id);

    if (title !== undefined) message.title = title;

    if (description !== undefined) message.description = description;

    return message;
  }
}

//fill DB with some data
MessageDB.add(
  1,
  "Wellcome John Doe",
  "We wellcome you with this first message"
);
MessageDB.add(1, "Second message", "This is the second message");
MessageDB.add(1, "Third message", "This is the third message");
MessageDB.add(1, "Fourth message", "This is the fourth message");
MessageDB.add(1, "Fifth message", "This is the fifth message");
MessageDB.add(1, "Sixth message", "This is the sixth message");
MessageDB.add(1, "Seventh message", "This is the seventh message");
MessageDB.add(1, "Eighth message", "This is the eighth message");
MessageDB.add(1, "Ninth message", "This is the ninth message");
MessageDB.add(1, "Tenth message", "This is the tenth message");
