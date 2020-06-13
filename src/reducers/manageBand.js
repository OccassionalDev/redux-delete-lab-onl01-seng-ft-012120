export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {}

      return { ...state, bands: [...state.bands, action.name] }

    default:
      return state;
  }
};
