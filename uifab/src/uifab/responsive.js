import { useMediaQuery } from 'react-responsive';

import useTheme from './useTheme';

const Responsive = ({ children, bp, not }) => {
  const theme = useTheme();
  const isMinimum = useMediaQuery({ minWidth: theme.breakpoints[bp] });

  if (not) {
    return isMinimum ? null : children;
  }

  return isMinimum ? children : null;
};

export default Responsive;
