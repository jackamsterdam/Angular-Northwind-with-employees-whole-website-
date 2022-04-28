import jwtDecode from "jwt-decode"
import { UserModel } from "../models/user.model"
// State
export class AuthState {
    token: string = null 
    user: UserModel = null 

    constructor() {
        this.token = localStorage.getItem('token')
        if (this.token) {
            const encodedObject: any = jwtDecode(this.token)
            this.user = encodedObject.user
        }
    }
}
// Action Type
export enum AuthActionType {
    Register = 'Register',
    Login = 'Login',
    Logout = 'Logout'
}

export interface AuthAction {
    type: AuthActionType,
    payload?: string // Optional (on Logout we don't need to supply a payload)
}

// Action Creators: 
export function registerAuthAction(token: string): AuthAction {
    return {type: AuthActionType.Register, payload: token}
}

export function loginAuthAction(token: string): AuthAction {
    return {type: AuthActionType.Login, payload: token}
}

export function logoutAuthAction(): AuthAction {
    return {type: AuthActionType.Logout}
}

// Reducer: 
export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {
    const newState = {...currentState}

    switch(action.type) {
        case AuthActionType.Register:
        case AuthActionType.Login:
            newState.token = action.payload  // Here the payload is the token sent from the backend.
            const encodedObject: any = jwtDecode(newState.token)  // Convert to any for getting the inside "user" object.
            newState.user = encodedObject.user 

            localStorage.setItem('token', newState.token)

        break;
        case AuthActionType.Logout:
            newState.token = null
            newState.user = null 
            localStorage.removeItem('token')

        break;
    }

    return newState
}