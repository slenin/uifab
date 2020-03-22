import {
  useHistory, useLocation,
} from 'react-router';

class ModalState {
  constructor(history, location) {
    this.history = history;
    this.location = location;
  }

  push = (state) => {
    const { pathname } = this.location;
    this.history.push({
      pathname, state,
    });
  }

  get = () => {
    const { state = {} } = this.location;
    return state;
  }
}

function useModalState() {
  const history = useHistory();
  const location = useLocation();
  const modalState = new ModalState(history, location);
  return modalState;
}

export default useModalState;
