"use client"

import React, { useActionState, useEffect } from 'react'
import { FormInput } from '../ui/input'
import { SubmitButton } from '../ui/button'
import { Task } from '@/types/project'
import { useLocale } from '../providers/LanguageProvider'
import { addTaskAction } from '../actions/addTaskAction'

function AddTask({addTask, projectId}:{addTask:(task:Task)=>void, projectId:string}) {
    const {dictionary}=useLocale()
    const [state, formAction]=useActionState(addTaskAction,{
        projectId:projectId
    })

    useEffect(()=>{
        if(state.task){
            addTask(state.task)
        }
    },[state.error, state.task])

  return (
    <form className='flex gap-4' action={formAction}>
        <FormInput name='title' placeholder={dictionary["title"]}/>
        <FormInput name='dueDate' type='date'/>
        <SubmitButton>{dictionary["create"]}</SubmitButton>
    </form>
  )
}

export default AddTask