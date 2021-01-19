import {useState} from 'react'
import {MdLink,MdAccessTime,MdPeople,MdApps} from 'react-icons/md'

export const Project = (props) => {
    const [isHover,setHover] = useState(false)
    const state = {...props}
    return (
      <li 
      onMouseLeave={()=>setHover(false)}
      onMouseEnter={()=>setHover(true)}
      className="flex w-full flex-col pt-2 relative items-center md:w-2/5 m-2 border rounded-lg  "
      >
        {isHover &&
        <div className={`absolute w-4/5 border-grey-300 shadow-custom cursor-default rounded-lg bg-white z-20 left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-xs  p-1`}>
        
        <a 
        className=" underline text-center font-medium "
        target="_blank" href={state.link}>
          <div className=" my-2 w-full flex items-center">
           <MdLink className="w-4 h-4 mr-2"/>
            {state.company}
          </div>
        </a>
        {
          state.tech &&
          <div className="flex w-full items-center">
            <MdApps className="w-4 h-4 mr-2"/>
            <div className="whitespace-pre-line w-4/5"> 
              {state.tech}
            </div>
          </div>
        }
        {
          state.period && 
          <div className="flex  w-full items-center">
            <MdAccessTime className="w-4 h-4 mr-2"/>
            {state.period}
          </div>
        }
        {
          state.users &&
          <div className="flex w-full items-center">
            <MdPeople className="w-4 h-4 mr-2"/>
            <div className="whitespace-pre-line w-4/5"> 
              {state.users}
            </div>
          </div>
        }
        </div>
        }
      <div
      className={`${isHover && "opacity-50 hover:shadow-custom_sm" }  relative z-10  flex items-center flex-col w-full`}
       >
        <div className="underline">
          {state.jobType}
        </div>
        
          <img className="w-16 h-16" src={state.img}/>
        {/* </a> */}
        {
          state.description &&
          <div className="flex w-full items-center text-xs"> 
            {/* <MdDescription className="w-4 h-4 mr-2"/> */}
            <div className="whitespace-pre-line ml-4 text-left my-2">
              {state.description}
            </div>
          </div>
        }
        </div>
      </li>
    )
  }