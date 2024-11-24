export type User={
    _id:string,
    email:string
}

export type PairToken={
    accessToken:string,
    refreshToken:string,
    user:User
}

export type SessionToken={
    accessToken:string,
    refreshToken:string,
    id:string,
    email:string
}