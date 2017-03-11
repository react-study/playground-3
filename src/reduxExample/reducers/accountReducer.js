const initialState = {
	accountList : [],
	total       : 0
};

const accountReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SAVE_MONEY' : {
			const total   = state.total + +action.money;
			const newList = [
				...state.accountList, {
					type   : 'save',
					money  : action.money,
					result : total
				}
			];
			return {
				accountList : newList,
				total
			};
		}
		
		case 'WITHDRAW_MONEY' : {
			const total   = state.total - +action.money;
			const newList = [
				...state.accountList, {
					type   : 'withdraw',
					money  : action.money,
					result : total
				}
			];
			return {
				accountList : newList,
				total
			};
		}
		// save or withdraw가 아니면 현재 상태를 반환한다
		default : return state;
	}
};

export default accountReducer;