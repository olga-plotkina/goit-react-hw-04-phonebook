import PropTypes from 'prop-types';
import { StyledContacts, ContactsItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <StyledContacts>
    {contacts.map(contact => (
      <ContactsItem key={contact.id}>
        {contact.name}: {contact.number}
        <button
          onClick={() => onDeleteContact({ type: 'delete', payload: contact })}
        >
          Delete
        </button>
      </ContactsItem>
    ))}
  </StyledContacts>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
