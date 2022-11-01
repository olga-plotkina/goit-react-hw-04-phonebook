import PropTypes from 'prop-types';
import { StyledContacts, ContactsItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <StyledContacts>
    {contacts.map(({ id, name, number }) => (
      <ContactsItem key={id}>
        {name}: {number}
        <button onClick={() => onDeleteContact(id)}>Delete</button>
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
