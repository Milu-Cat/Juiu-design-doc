import ActionsName from '../actionsName';

export interface UserState {
  isLogin: boolean,
  author: string
}
export interface ActiveOption {
  type: string,
  state: any
}

export let _state = {
  isLogin: false,
  author: ''
}

const userReducer = (state = _state, action: ActiveOption) => {
  switch (action.type) {
    case 'SET_LOGIN':
      return { ...state, isLogin: action.state }
    case 'SET_AUTHOR':
      return { ...state, author: action.state }
    default:
      return state
  }
}

export default userReducer