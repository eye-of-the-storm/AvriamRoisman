import {useState} from 'react'

export const WithTooltip = ({icon,text}) => {
    const [show,setShow] = useState(false)
    return (
      <div className="relative cursor-default  mx-2">
        <div onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>{icon}</div>
        {
        show &&
        <div className="absolute top-0 w-max transform -translate-x-1/2 left-1/2 -translate-y-full bg-grey-700 p-2 text-sm text-white rounded-md">{text}</div>
        }
      </div>
    )
  }