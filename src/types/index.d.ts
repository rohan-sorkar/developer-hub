export interface RegisterInputs {
    name: string, 
    email: string, 
    password: string, 
    confirmPassword: string
}

export interface loginInputs {
    email: string, 
    password: string
}

export interface AuthState {
    accessToken: string,
    user: {
      id: string,
      name: string,
      email: string
    }
}