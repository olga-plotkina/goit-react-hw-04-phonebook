import React from 'react';
import { nanoid } from 'nanoid';
import { Form } from './App.styled';
import { Filter } from './Filter';
import { ContactForm } from 'components/ContactForm/';
import { ContactList } from 'components/ContactList/';
import { useState } from 'react';
import { useReducer } from 'react';

export function App() {
  const [filter, setFilter] = useState('');

  const defaultValue = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return state.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  function countReducer(state, action) {
    switch (action.type) {
      case 'add':
        const newState = state.find(
          contact => contact.name === action.payload.name
        )
          ? alert(`${action.payload.name} is already in contacts`)
          : [
              ...state,
              {
                id: nanoid(),
                name: action.payload.name,
                number: action.payload.number,
              },
            ];
        window.localStorage.setItem('contacts', JSON.stringify(newState));
        return newState;

      case 'delete':
        return state.filter(contact => contact.id !== action.payload.id);
      default:
        throw new Error(`Unsupported action type ${action.type}`);
    }
  }

  const [state, dispatch] = useReducer(
    countReducer,
    JSON.parse(window.localStorage.getItem('contacts')) ?? defaultValue
  );

  return (
    <Form>
      <h1>Phonebook </h1>
      <ContactForm submitProp={dispatch} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList contacts={getVisibleContacts()} onDeleteContact={dispatch} />
    </Form>
  );
}
