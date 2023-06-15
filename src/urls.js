const HOSTNAME = 'http://127.0.0.1:8000/api'
// const HOSTNAME = 'http://ec2-18-207-215-29.compute-1.amazonaws.com/api'


export const GETUSER = `${HOSTNAME}/auth/`
export const ME = `${HOSTNAME}/auth/me`
export const LOGIN = `${HOSTNAME}/auth/token/`
export const SIGNUP = `${HOSTNAME}/auth/signup/`
export const GOOGLEAUTH = `${HOSTNAME}/auth/google-auth/`
export const REFRESH = `${HOSTNAME}/auth/token/refresh/`
export const USERBUSINESS = `${HOSTNAME}/auth/business/`
export const CHOOSEME = `${HOSTNAME}/business/choose_me/`
export const CHALLENGEME = `${HOSTNAME}/business/challenge_me/`
export const BUSINESSVIEW = `${HOSTNAME}/business/`




