import React from 'react';
import { nanoid } from 'nanoid';
import { Form } from './App.styled';
import { Filter } from './Filter';
import { ContactForm } from 'components/ContactForm/';
import { ContactList } from 'components/ContactList/';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = data => {
    this.setState(prevState => {
      if (prevState.contacts.find(contact => contact.name === data.name)) {
        alert(`${data.name} is already in contacts`);
        return;
      } else {
        return {
          contacts: [
            ...prevState.contacts,
            { id: nanoid(), name: data.name, number: data.number },
          ],
        };
      }
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    return (
      <Form>
        <h1>Phonebook </h1>
        <ContactForm submitProp={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.getVisibleContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Form>
    );
  }
}
