import types from './soally.types'

const setResult = (result) => {
    return {
        type: types.SET_RESULT,
        payload: result
    }
}

export { setResult }