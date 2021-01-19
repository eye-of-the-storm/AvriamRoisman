import { useEffect,useRef,useState } from "react"

export const Slider = ({rate}) => {
  const [grade,setGrade] = useState(0)
  const ref = useRef()

  const isInViewport = (offset = 0)  => {
    if (!ref.current) return false;
    const top = ref.current.getBoundingClientRect().top;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  }
  useEffect(()=>{
    if(isInViewport()){
      setGrade(rate)
    }
    document.addEventListener('scroll', function(e) {
      if(isInViewport()){
        setGrade(rate)
      }
    })
  },[])

  return (
    <div ref={ref} className="relative h-2">
      <div className="absolute left-0 rounded-md top-0 bg-custom-400 h-2 transition-all w-0" style={{width:grade/10*100 +"%",transitionDuration:"1500ms"}}/>
      <div className="w-full bg-grey-300 h-2 rounded-md"/>
    </div>
  )
}
  