import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const SmothScroll = ({ children, scrollTo }) => (
  <Link to={scrollTo} spy smooth offset={-70} duration={200}>
    {children}
  </Link>
);

SmothScroll.defaultProps = {
  scrollTo: '',
};

SmothScroll.propTypes = {
  scrollTo: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SmothScroll;
