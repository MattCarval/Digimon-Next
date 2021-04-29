import { useState } from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import Card from '../Card';
import SearchInput from '../SearchInput';
import * as S from './styled';

const Body = ({ data, title }) => {
  const [search, setSearch] = useState('');

  return (
    <S.Wrapper>
      <Layout>
        <S.Search>
          <h1>{title}</h1>
          <SearchInput
            placeholder="Search here"
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
        </S.Search>
      </Layout>
      <S.Content>
        {!!data &&
          data
            .filter(digimon =>
              digimon.name.toLowerCase().includes(search.toLocaleLowerCase()),
            )
            .map(element => (
              <Card
                key={element}
                title={element.name}
                imgSrc={element.img}
                subtitle={element.level}
              />
            ))}
      </S.Content>
    </S.Wrapper>
  );
};

Body.defaultProps = {
  title: '',
  data: [],
};

Body.propTypes = {
  title: '',
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      img: PropTypes.string,
      level: PropTypes.string,
    }),
  ),
};
export default Body;
