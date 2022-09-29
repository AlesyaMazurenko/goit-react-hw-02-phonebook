import React, { Component } from "react";
import { nanoid } from 'nanoid';

class Form extends Component {
    state = {
        name: '',
        number: '',
    }

    handleInputChange = event => {
    // console.log(event.currentTarget.name)
    // console.log(event.currentTarget.value);

    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = evt => {
      evt.preventDefault();
      
      //передаем форме данные в App
      this.props.onSubmit(this.state.name);
      this.reset();

    console.log(this.state);
  }
    
    reset = () => {
        this.setState({ name: '', number: ''})
    }
    
    nameId = nanoid();
    numberId = nanoid();

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameId}>Name
                <input
                        type="text"
                        name="name" //name cовпадает с полем в state.name!!
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        id={this.nameId} />
                </label> 
                 <label htmlFor={this.numberId}>Name
                <input
                        type="tel"
                        name="number" //name cовпадает с полем в state.name!!
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        id={this.numberId} />
                </label> 
                <button type="submit">Add contact</button>
            </form>
         );
    }
}

export default Form;