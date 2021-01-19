import {WithTooltip} from './withTooltip'

export const EducationalPart = ({period,location,subject,special = false}) => (
    <div className="flex flex-col  py-2 text-grey-700">
      <h1 className=" text-base underline">
        {period}
      </h1>
      <h2 className="font-bold">
        {subject}
      </h2>
      {
        special &&
        <div>
          <div className="flex items-center">
            <label className="text-sm">
              Major: 
            </label>
            <WithTooltip icon={"⚛️"} text={"Physics"}/>
            <WithTooltip icon={"🛰️  "} text={"Astrophysics"}/>
            <WithTooltip icon={"💻"} text={"Computers"}/>
            <WithTooltip icon={"🇷🇺 "} text={"Russian language"}/>
          </div>
          
        </div>
      }
      <h2 className="text-sm">
        {location}
      </h2>
    </div>
  )
  