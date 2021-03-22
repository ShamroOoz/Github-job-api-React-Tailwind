export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return {...state, loading : true}
    case ACTIONS.GET_DATA:
       return {...state, loading : false , jobs : [...state.jobs , action.payload]}
    case ACTIONS.ERROR:
      return {...state , error : true}
    default:
      return state;
}