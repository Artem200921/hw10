import React from "react";
import { nanoid } from "nanoid";
import { ContactsForm } from "./components/ContactsForm";
import { Filter } from "./components/Filter";
import { ContactsTest } from "./components/Contacts";
import { AppStyle } from "./styles/AppStyle";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  searchContact = (e) => {
    this.setState({ filter: e.target.value });
  };

  addContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    const isExist = this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
    form.reset();
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <AppStyle>
        <h1>Phonebook</h1>
        <ContactsForm form={this.addContact} />
        <h2>Contacts</h2>
        <Filter search={this.searchContact} />
        <ContactsTest
          id={nanoid()}
          contacts={filteredContacts}
          search={this.searchContact}
          delete={this.deleteContact}
        />
      </AppStyle>
    );
  }
}

export default App;
