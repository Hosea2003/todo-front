import React from 'react'
import StateManagedSelect, { components } from 'react-select'
import Select, { StylesConfig } from 'react-select'

export type OptionType = {
    value:string,
    label:string
}

function CustomSelect(
    {options, defaultValue, onChange}:{
        options:OptionType[], defaultValue?:OptionType, onChange?:(newValue:OptionType)=>void}) {
    const customStyles:StylesConfig={
        control:(base, state)=>({
            ...base,
            background:"var(--light-gray)",
            border:"none",
            borderRadius:"6px",
            fontSize:"12px"
        }),
        menu:(base, state)=>({
            ...base,
            background:"var(--light-gray)",
            fontSize:"12px",
            padding:"4px"
        }),
        option:(base, state)=>({
            ...base,
            background:state.isFocused||state.isSelected?"var(--gray)":"",
            borderRadius:"6px",
            ":hover":{
                background:"var(--gray)",
                color:"white"
            },
            marginTop:"2px"
        }),
        input:(base)=>({
            ...base,
            color:'var(--foreground)'
        }),
        singleValue:(base, state)=>({
            ...base,
            color:"var(--foreground)"
        })
        
    }
    
  return (
    <Select
        options={options}
        styles={customStyles}
        value={defaultValue}
        onChange={(newValue)=>onChange && onChange(newValue as OptionType)}/>
  )
}

export default CustomSelect