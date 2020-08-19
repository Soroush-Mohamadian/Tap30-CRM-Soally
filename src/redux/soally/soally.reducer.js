import types from './soally.types'

const initialState = {
    result: {
        id: undefined,
        pollResult: []
    }
}

const soallyReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case types.SET_RESULT:
            return {
                ...state,
                result: { ...state.result, id: payload.id, pollResult: [...state.result.pollResult, payload.text] }
            }
        default:
            return state
    }
}

export default soallyReducer