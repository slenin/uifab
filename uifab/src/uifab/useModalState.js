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
    const modalState = state;
    modalState.modal = true;
    this.history.push({
      pathname, state: modalState,
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
