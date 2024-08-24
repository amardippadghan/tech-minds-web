import React from 'react'

interface DropdownProps {
    title : string
    items : string[]
}
function Dropdown({title , items } : DropdownProps) {
  return (
    <details className="dropdown">
    <summary className="btn m-1">{title}</summary>
    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
       {
        items && items?.map((item : string , index : number)=>{
          return <li key={index}><a>{item}</a></li>
        })

       }
    </ul>
  </details>
  )
}

export default Dropdown