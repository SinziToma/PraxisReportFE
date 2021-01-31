const initialState = [];

// Use the initialState as a default value
export default function appReudcer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case 'LOGIN_SUCCESSFUL':
            return Object.assign(state, action.user)
        case 'LOGOUT':
            return Object.assign(state, [])
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}