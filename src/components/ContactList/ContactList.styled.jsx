import styled from 'styled-components';

export const StyledContacts = styled.ul`
  font-size: 24px;
  margin-top: 25px;
`;

export const ContactsItem = styled.li`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-shadow: 0 0 1px 1px grey;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  button {
    padding: 2px 7px;
    margin-left: 20px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`;
