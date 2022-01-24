import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
    users: {
        loading: false,
        data: null,
        error: null
    },
    user: {
        loading: false,
        data: null,
        error: null
    }
};

const loadingState = {
    loading: true,
    data: null,
    error: null
};

const success = data => ({
    loading: false,
    data,
    error: null
});

const error = error => ({
    loading: false,
    data: null,
    error: error
});

function usersReducer(state, action) {
    switch(action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: loadingState
            };
        case 'GET_USERS_SUCCESS':
            return {
                ...state,
                users: success(action.data)
            };
        case 'GET_USERS_ERROR':
            return {
                ...state,
                users: error(action.error)
            };
        case 'GET_USER':
            return {
                ...state,
                user: success(action.data)
            };
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                user: success(action.data)
            };
        case 'GET_USER_ERROR':
            return {
                ...state,
                user: error(action.error)
            };
        default:
            throw new Error(`Unhanded action type: ${action.type}`);
    }
}

const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export function UsersProvider({ children }) {
    const [state, dispatch] = useReducer(usersReducer, initialState);
    return (
        <UsersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    );
}

export function useUsersState() {
    const state = useContext(UsersStateContext);
    if(!state) {
        throw new Error('Cannot find UsersProvider');
    }
    return state;
}

export function useUsersDispatch() {
    const dispatch = useContext(UsersDispatchContext);
    if(!dispatch) {
        throw new Error('Cannot find UsersProvider');
    }
    return dispatch;
}