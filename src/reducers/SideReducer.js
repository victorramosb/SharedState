export const initialSideState = {
    loading: false,
    error: '',
    data: []
}

export const sideReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'REQUEST':
            return { ...state, loading: true }

        case 'ERROR':
            return { ...state, loading: false, error: payload }

        case 'ADD_TEXT':
            return { ...state, loading: false, data: [...state.data, payload] }

        default:
            return state
    }
}
