export const Slider = ({rate}) => (
    <div className="relative h-2">
      <div className="w-full absolute left-0 rounded-md top-0 bg-custom-400 h-2" style={{width:rate/10*100 +"%"}}/>
      <div className="w-full bg-grey-300 h-2 rounded-md"/>
    </div>
  )
  