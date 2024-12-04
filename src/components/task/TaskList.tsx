"use client";

import { useSize } from '@/lib/size';
import { Task } from '@/types/project';
import React from 'react'
import { TaskItemRow } from './TaskItem';

function TaskListLarge({tasks}:{tasks?:Task[]}){

  const today = new Date()
  
  return(
    <table className='w-full border-collapse bg-sidebar'>
            <thead>
                <tr>
                    <th className='px-6 bg-light-gray text-gray align-middle py-3 text-xs uppercase text-left'>Titre</th>
                    <th className='px-6 bg-light-gray text-gray align-middle py-3 text-xs uppercase text-left'>Date d'échéance</th>
                    <th className='px-6 bg-light-gray text-gray align-middle py-3 text-xs uppercase text-left'>Statut</th>
                </tr>
            </thead>
            <tbody>
                {tasks?.map((task, index)=>(
                    <TaskItemRow task={task} key={index} today={today}/>
                ))}
            </tbody>
        </table>
  )
}

export function TaskList({tasks}:{tasks?:Task[]}){
  const {width}=useSize()

  if(width>640){
    return <TaskListLarge tasks={tasks}/>
  }

  return (
    <div className="flex flex-col gap-2">
      <TaskListLarge tasks={tasks}/>
    </div>
  )
}