import { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import * as S from './styled';

const SearchInput = ({ value, onChange, placeholder, ...props }) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(state => !state);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(state => !state);

    if (inputRef.current?.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);

  return (
    <S.Container isFocused={isFocused} isFilled={isFilled}>
      <FiSearch size={20} />
      <input
        type="search"
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </S.Container>
  );
};
SearchInput.defaultProps = {
  value: '',
  onChange: () => null,
  placeholder: '',
};
SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
export default SearchInput;
