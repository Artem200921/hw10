import React from "react";

export class ContactsForm extends React.Component {
  render() {
    return (
      <form action="" onSubmit={this.props.form}>
        <label htmlFor="name">Schreibe dien Freund name, bitte</label>
        <input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="tel">Schreibe dien Freund telefonnummer, bitte</label>
        <input
          id="tel"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">submit</button>
      </form>
    );
  }
}
