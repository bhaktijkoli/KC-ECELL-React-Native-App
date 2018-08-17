var initialState = {
  token: '',
  user: [],
  topNavigation: null,
}
export default function reducer(state=initialState, action) {

  switch (action.type) {
    case "SET_AUTH": {
      return {...state, token: action.payload.token, user: action.payload.user}
    }
    case "SET_TOPNAVIGATION": {
      return {...state, topNavigation: action.payload}
    }
  }

  return state
}
