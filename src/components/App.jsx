import React from 'react';
import { nanoid } from 'nanoid';
import { Form } from './App.styled';
import { Filter } from './Filter';
import { ContactForm } from 'components/ContactForm/';
import { ContactList } from 'components/ContactList/';
import { useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useEffect } from 'react';

export function App() {
  const [contacts, setContacts] = useLocalStorage(
    'contacts' ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filterWord, setFilterWord] = useState('');

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const formSubmitHandler = data => {
    setContacts(prevState =>
      prevState.find(contact => contact.name === data.name)
        ? alert(`${data.name} is already in contacts`)
        : [...prevState, { id: nanoid(), name: data.name, number: data.number }]
    );
  };

  const changeFilter = event => {
    setFilterWord(event.currentTarget.value);
  };

  useEffect(() => {
    if (filterWord === '') {
      return;
    }
    setContacts(prevState =>
      prevState.filter(contact =>
        contact.name.toLowerCase().includes(filterWord.toLowerCase())
      )
    );
  }, [filterWord, setContacts]);

  console.log(contacts);

  return (
    <Form>
      <h1>Phonebook </h1>
      <ContactForm submitProp={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter filter={filterWord} onChange={changeFilter} />
      <ContactList contacts={contacts} onDeleteContact={deleteContact} />
    </Form>
  );
}
