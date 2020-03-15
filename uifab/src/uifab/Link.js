import { Link } from 'react-router-dom';

import style from './style';

export default style(Link, {
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    opacity: 0.8,
  },
});
