const inputStyle = {
  borderColor: 'border',
  borderRadius: 4,
  borderStyle: 'solid',
  borderWidth: 1,
  boxSizing: 'border-box',
  display: 'block',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  px: 3,
  py: 2,
  transition: 'border-color 0.05s ease-in-out',
  width: '100%',
  '&:focus': {
    borderColor: 'primary',
    outline: 'none',
  },
  '&::placeholder': {
    color: 'muted',
  },
  '&::-ms-input-placeholder': {
    color: 'muted',
  },
};

export default inputStyle;
