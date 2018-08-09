const initialState = {
	game: null,
	name: null
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATEGAME":
			return {...state, game: action.payload}
		case "UPDATENAME":
			return {...state, name: action.payload}
		default:
			return state;
	}
};

export default rootReducer;