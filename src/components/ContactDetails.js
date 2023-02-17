import React from "react";
import user from "../Images/user.png";

const ContactDetails = (props) => {
  // const { name, email } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img className="ui avatar image" src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">Satish Reddy</div>
          <div className="discription">Satishchaduvula@gmail.com</div>
        </div>
      </div>
    </div>
  );
};
export default ContactDetails;
