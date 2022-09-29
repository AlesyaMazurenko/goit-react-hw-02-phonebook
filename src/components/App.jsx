import React, { Component } from "react";
import { nanoid } from 'nanoid';
import Form from "./Form/Form";
import ContactList from './ContactList/ContactList'

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    
  };

  formSubmitHandler = (name, number) => {
    // console.log(data);

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    // Добавляем запись в state - распыляем новую запись в список контактов
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
      // contacts: [prevState.contacts].push(contact);
    }));
  };

  render() {
    return (
    <div>
        <Form onSubmit={this.formSubmitHandler} />
        <h2> Contacts</h2>
        <ContactList items={this.state.contacts } />
      
      </div> 
    )
  }
}
  
// export App;
  // ReactDOM.render(
  //   <App onSubmit={values => console.log(values)} />,
  //   document.getElementById("root")
  // );
