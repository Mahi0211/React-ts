import React from "react";
// @ts-expect-error Image import is handled by Webpack
import user from "../../src/assets/user.jpg";
import { useLocation } from "react-router-dom";

interface Contact {
  id: string;
  name: string;
  email: string;
}

interface Props {
  contact: Contact;
  // clickHandler: (id: string) => void; // Correcting the type of clickHandler
}

const ContactDetail: React.FC<Props> = ({ contact }) => {
  const location = useLocation<{ contact: Contact }>();
  const { name, email } = location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
