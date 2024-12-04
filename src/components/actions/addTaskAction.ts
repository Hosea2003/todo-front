import { addTask } from "@/service/api";
import { Task } from "@/types/project";

type AddTaskActionProps={
    projectId:string;
    task?:Task
    error?:boolean
}

export async function addTaskAction(
    state:AddTaskActionProps, 
    formData:FormData):Promise<AddTaskActionProps>{
        try{
            const response = await addTask(state.projectId, {
                title:formData.get('title')!.toString(),
                dueDate:formData.get("dueDate")!.toString()
            })

            return {
                ...state,
                task:response
            }
        }
        catch(error){
            return{
                ...state,
                error:true
            }
        }
}