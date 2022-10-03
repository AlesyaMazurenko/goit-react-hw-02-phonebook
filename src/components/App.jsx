import React, { Component } from "react";
import { nanoid } from 'nanoid';
import Form from "./Form/Form";
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  };

  formSubmitHandler = (name, number) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    // Добавляем запись в state - распыляем новую запись в список контактов
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  FilterInput = (evt) => {
    this.setState({ filter: evt.currentTarget.value })
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
     const normalizedFilter = filter.toLowerCase();
   
     //выбираем список по фильтру, что быдем рендерить
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2> Contacts</h2>

        <Filter value={filter} onChange={this.FilterInput} />
        <ContactList items={visibleContacts} />
      </div> 
    )
  }
}
