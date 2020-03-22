import { Link } from 'react-router-dom';
import 'focus-visible';

import focusStyle from './focusStyle';
import style from './style';

export default style(Link,
  {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      opacity: 0.8,
    },
  },
  focusStyle);
