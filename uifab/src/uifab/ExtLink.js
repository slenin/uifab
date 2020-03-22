import focusStyle from './focusStyle';
import style from './style';

const ExtLink = style('a',
  {
    color: 'primary',
    textDecoration: 'none',
    '&:focus': {
      outlineColor: 'primary',
      outlineStyle: 'auto',
      outlineWidth: 1,
    },
    '&:focus:not(.focus-visible)': {
      outline: 'none',
    },
    '&:hover': {
      opacity: 0.8,
    },
  },
  focusStyle);

export default ExtLink;
