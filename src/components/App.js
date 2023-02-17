import React, { useState, useEffect } from "react";
// import { uuid } from "uuidv4";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ContactDetails from "./ContactDetails";
import Baariz from "./Baariz";

function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  // const [contacts, setContacts] = useState([]);

  // const Nav = useNavigate();

  // const addContactHandler = (contact) => {
  //   console.log(contact);
  //   setContacts([...contacts, { id: uuid(), ...contact }]);
  // };

  // const removeContactHandler = (id) => {
  //   const newContactList = contacts.filter((contact) => {
  //     return contact.id !== id;
  //   });

  //   setContacts(newContactList);
  // };

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      {/* <Header />
      <Routes>
        <Route
          path="/add"
          exact
          element={
            <AddContact Nav={Nav} addContactHandler={addContactHandler} />
          }
        />
        <Route
          path="/"
          exact
          element={
            <ContactList
              contacts={contacts}
              getContactId={removeContactHandler}
            />
          }
        />
        <Route path="/contact/:id" element={<ContactDetails />} />
      </Routes> */}
      <Baariz />
    </div>
  );
}

export default App;
