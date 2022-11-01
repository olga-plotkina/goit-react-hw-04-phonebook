import PropTypes from 'prop-types';
import { StyledFilter } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <StyledFilter>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={onChange}></input>
      </label>
    </StyledFilter>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
