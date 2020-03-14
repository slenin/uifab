import { useMediaQuery } from 'react-responsive';

import { useTheme } from './styles';

const NotMobile = ({ children }) => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery({ minWidth: theme.breakpoints.sm });
  return isNotMobile ? children : null;
};

const Mobile = ({ children }) => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery({ minWidth: theme.breakpoints.sm });
  return isNotMobile ? null : children;
};

const useNotMobile = () => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery({ minWidth: theme.breakpoints.sm });
  return isNotMobile;
};

const useMobile = () => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery({ minWidth: theme.breakpoints.sm });
  return !isNotMobile;
};

export {
  Mobile, NotMobile, useMobile, useNotMobile,
};
