import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Contact {
  name: string;
  email: string;
}

interface Props {
  addContactHandler: (contact: Contact) => void;
}

const AddContact: React.FC<Props> = ({ addContactHandler }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const add = (e: FormEvent) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2 style={{ margin: "3.5rem 0 1rem 0" }}>Add</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue" type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
