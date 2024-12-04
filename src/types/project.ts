import { User } from "./user"

export type Project ={
    _id:string,
    title:string,
    owner:User,
    tasks:Task[]
}

export type Task={
    _id:string;
    title:string;
    dueDate:Date;
    complete:boolean;
}