"use client";

import React, { useActionState, useEffect } from 'react'
import { FormInput } from '../ui/input'
import { SubmitButton } from '../ui/button'
import { addProjectAction } from '../actions/addProjectAction'
import { useProjectsStore } from '@/store/store';
import { useLocale } from '../providers/LanguageProvider';

function AddProject() {
    const [state, formAction]=useActionState(addProjectAction, {error:false})
    const {addProject}=useProjectsStore()
    const {dictionary}=useLocale()

    useEffect(()=>{
        if(!state.error && state.project){
            console.log(state.project)
            addProject(state.project)
        }
    }, [state.error, state.project])

  return (
    <form className='flex flex-col max-w-[450px] w-full gap-2 md:flex-row' action={formAction}>
        <p className="text-2xl font-semibold">{dictionary["createProject"]}</p>
        <FormInput name='title'/>
        <SubmitButton>{dictionary["create"]}</SubmitButton>
    </form>
  )
}

export default AddProject