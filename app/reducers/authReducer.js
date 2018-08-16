var initialState = {
  token: '',
  user: [],
}
export default function reducer(state=initialState, action) {

  switch (action.type) {
    case "SET_AUTH": {
      return {...state, token: action.payload.token, user: action.payload.user}
    }
  }

  return state
}
