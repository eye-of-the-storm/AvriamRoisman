import {Slider} from './slider'

export const Skill = ({rate,skill}) => (
    <div className="mb-2">
      <label className="text-sm">{skill}</label>
      <Slider rate={rate}/>
    </div>
  )