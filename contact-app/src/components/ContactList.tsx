import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

interface Contact {
  id: string;
  name: string;
  email: string;
}

interface Props {
  contacts: Contact[];
  getContactId: (id: string) => void;
}

const ContactList: React.FC<Props> = ({ contacts, getContactId }) => {
  const deleteContactHandler = (id: string) => {
    getContactId(id);
  };

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="ui celled list">
      <h2 style={{ margin: "3.5rem 0 1rem 0" }}>
        Contact List
        <Link to="/add">
        <button className="ui button blue right" style={{ float: "right" }}>
          Add Contact
        </button></Link>
      </h2>
      {renderContactList}
    </div>
  );
};

export default ContactList;
