import React from "react";
import { Contact } from "./Contact";
import { Contacts } from "../styles/Contacts";

export class ContactsTest extends React.Component {
  render() {
    return (
      <Contacts>
        <ul>
          {this.props.contacts.map((contact, index) => (
            <Contact
              key={index}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              delete={this.props.delete}
            />
          ))}
        </ul>
      </Contacts>
    );
  }
}
