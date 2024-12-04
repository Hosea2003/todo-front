import { cn, formatDate } from '@/lib/utils'
import { Task } from '@/types/project'
import React from 'react'
import { FormInput } from '../ui/input'

export function TaskItemRow({task, today}:{task:Task, today:Date}) {
  return (
    <tr>
        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>{task.title}</td>
        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
            {task.dueDate?(
                <span className={cn(
                    !task.complete&&task.dueDate<today?"text-red-400":"text-green-500",
                    "font-semibold"
                    )}>
                    {formatDate(task.dueDate)}
                </span>
            ):(
                <FormInput type='date' className='border-0'/>
            )}
        </td>
        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
            <span className={cn(task.complete?'bg-green-500':'bg-blue-500', 'p-1 rounded-md text-white')}>{task.complete?"Completed":"In progress"}</span>
        </td>
    </tr>
  )
}