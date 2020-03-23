import { useMediaQuery } from 'react-responsive';

import useTheme from './useTheme';

const useResponsive = (breakpoint) => {
  const theme = useTheme();
  const isMinimum = useMediaQuery({ minWidth: theme.breakpoints[breakpoint] });
  return isMinimum;
};

export default useResponsive;
