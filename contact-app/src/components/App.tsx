import "./App.css";
import { v4 as uuid } from "uuid";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import { useEffect, useState } from "react";

interface Contact {
  name: string;
  email: string;
}

const LOCAL_STORAGE_KEY = "contact";

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContactHandler = (contact: Contact) => {
    const newContact = { id: uuid(), ...contact };
    setContacts([...contacts, newContact]);
  };

  const removeContactHandler = (id: string) => {
    const newContactList = contacts.filter((contact: Contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
    // Update local storage here
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };

  useEffect(() => {
    const retrieveContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (retrieveContacts) setContacts(JSON.parse(retrieveContacts));
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ContactList
              contacts={contacts}
              getContactId={removeContactHandler}
            />
          }
        />
        <Route
          path="/add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route path="/contact/:id" element={<ContactDetail />} />
      </Routes>
    </div>
  );
}

export default App;
