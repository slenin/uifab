import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

function ScrollToTop(props) {
  const { children } = props;
  const location = useLocation();
  const prevLocationRef = useRef();
  useEffect(() => {
    prevLocationRef.current = location;
  });
  const prevLocation = prevLocationRef.current;

  useEffect(() => {
    if (!(location.state && location.state.modal)
      && !(prevLocation && prevLocation.state && prevLocation.state.modal)) {
      try {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      } catch (error) {
        window.scrollTo(0, 0);
      }
    }
  }, [location, prevLocation]);

  return children;
}

ScrollToTop.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ScrollToTop.defaultProps = {
  children: null,
};

export default ScrollToTop;
