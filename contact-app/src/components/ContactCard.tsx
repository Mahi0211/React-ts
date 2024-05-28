import React from "react";
import { Link } from "react-router-dom";
// @ts-expect-error Image import is handled by Webpack
import user from "../../src/assets/user.png";

interface Contact {
  id: string;
  name: string;
  email: string;
}

interface Props {
  contact: Contact;
  clickHandler: (id: string) => void;
}

const ContactCard: React.FC<Props> = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;

  return (
    <div
      className="item"
      style={{
        padding: "1.5rem 0",
      }}
    >
      <img className="ui avatar image" src={user} alt="" />
      <div className="content">
        <Link
          to={{
            pathname: `/contacts/${id}`,
            state: { Contact: contact }
          }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>

      <i
        className="trash alternate outline icon"
        style={{ color: "red", float: "right", cursor: "pointer" }}
        onClick={() => clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
