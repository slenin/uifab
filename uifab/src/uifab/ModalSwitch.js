import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Route, useHistory, useLocation } from 'react-router';
import { Switch } from 'react-router-dom';

function ModalSwitch(props) {
  const { pageRoutes, modalRoutes } = props;
  const location = useLocation();
  const history = useHistory();
  const { state = {} } = location;
  const { modal } = state;

  const prevLocationRef = useRef();
  useEffect(() => {
    if (history.action !== 'POP' && !(location.state && location.state.modal)) {
      prevLocationRef.current = location;
    }
  });
  const prevLocation = prevLocationRef.current;
  return (
    <Route>
      <Switch location={modal ? prevLocation : location}>
        {pageRoutes}
      </Switch>
      {modal && modalRoutes}
    </Route>
  );
}

ModalSwitch.propTypes = {
  pageRoutes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  modalRoutes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ModalSwitch.defaultProps = {
  pageRoutes: null,
  modalRoutes: null,
};

export default ModalSwitch;
