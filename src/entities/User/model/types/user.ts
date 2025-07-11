export interface User {
    id:string,
    username:string
    // пароль на фронте не храним
}

export interface UserSchema {
     authData?:User

}