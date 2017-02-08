function reducer(state = {
	text: 'Hello',
	name: 'Jett'
}, action) {
	switch (action.type) {
		case 'change':
			return {
				name: action.payload,
				text: 'Hello, ' + action.payload
			};
		default:
			return state;
	}
};

export default reducer;