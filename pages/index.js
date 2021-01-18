import {useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {MdLink,MdAccessTime,MdPeople} from 'react-icons/md'

const Container = ({title,children,...props}) => (
  <div className=" flex relative md:max-w-1/3" >
    <div  className={" p-2 rounded-xl flex-cv my-2 md:m-4 relative  " + props.className} >
      <h1 className="text-custom-400 font-bold mb-4">
        {title}
      </h1>
      {children}
    </div>
  </div>
)
// max-w-xl

const DetailPart = ({children,label}) => (
  <div className="my-2 text-grey-700 text-sm">
    <h2 className="font-bold">
      {label}
    </h2>
    {children}
  </div>
)

const WithTooltip = ({icon,text}) => {
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

const EducationalPart = ({period,location,subject,special = false}) => (
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

const Skill = ({rate,skill}) => (
  <div className="mb-2">
    <label className="text-sm">{skill}</label>
    <Slider rate={rate}/>
  </div>
)

const Slider = ({rate}) => (
  <div className="relative h-2">
    <div className="w-full absolute left-0 top-0 bg-custom-400 h-2" style={{width:rate/10*100 +"%"}}/>
    <div className="w-full bg-grey-300 h-2"/>
  </div>
)


const Project = (props) => {
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

export default function Home() {
  return (
    <div className=" w-full p-3 md:p-8 h-full md:h-screen" 
    >
      <Head>
        <title>Aviram Roisman </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div 
      className="flex bg-grey-100 h-full p-4"
      // className=" bg-grey-100 shadow-custom p-4 md:p-8 rounded-xl h-full flex md:pt-0 pt-14 "
      >
        <div 
        className="flex flex-col w-full flex-wrap h-full "
        // className="w-full md:w-full md:mx-auto h-full flex flex-wrap flex-col  "
        >
          <Container className=" mt-16" >
            <img 
              className="absolute shadow-xl rounded-full h-40 w-40 top-1/2 left-1/2 md:top-0 transform -translate-x-1/2 -translate-y-full md:-translate-x-1/2 md:-translate-y-0"
            src="https://scontent-lhr8-2.xx.fbcdn.net/v/t1.0-9/97977483_10213336804773455_2247320179975389184_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=tFKB94zsp3UAX9te14D&_nc_ht=scontent-lhr8-2.xx&oh=0317d38d193b8aa0f4bfe12eec011aa5&oe=602A9BB0"/>
            <personaldata className=" text-center  shadow-custom_sm  bg-custom-400 rounded-xl p-8 mt-16 flex flex-col text-white md:mt-28">
              <fullname className=" text-xl font-bold my-1">
                Aviram Roisman
              </fullname>
              <jobtitle className="text-grey-700 text-base">
                Full Stack Engineer
              </jobtitle>
            </personaldata>
          </Container>
          <Container title="How to reach me:" className=" m-2 ">
            <DetailPart label="Cell:">
              <a 
              className=" hover:underline"
              href="callto:+972502650586">
                +972 50 2650586
              </a>
            </DetailPart>
            <DetailPart label="Email:">
            <a
              className="hover:underline"
              href="mailto:aviram7168@gmail.com">
                aviram7168@gmail.com
              </a>
            </DetailPart>
            <DetailPart label="LinkedIn:">
            <a 
              className="hover:underline"
              href="https://www.linkedin.com/in/aviram-roisman-79a64b15b" target="_blank">
                @AviramRoisman
              </a>  
            </DetailPart>
            <DetailPart label="Address:">
            <label>
                Netanya, Israel
              </label>
            </DetailPart>        
          </Container>

          <Container title="Personal Profile" className= " bg-white border  border-grey-300  m-2  shadow-custom_sm ">
            <div className="flex justify-around ">
              <div>
              🥋  Karate Black belt
              </div>
              <div>
              🧗‍♀️  Rock Climb 
                </div>
            </div>
            <div className="flex justify-around mt-2">
              <div>
              👥 Team Player
              </div>
              <div>
              📚 Autodidact
                </div>
            </div>
            <div >
              <h1 className="mt-2  underline">Languages</h1>
              <Skill rate={10} skill="Hebrew"/>
              <Skill rate={10} skill="English"/>
              <Skill rate={7.5} skill="Russian"/>
            </div>
          </Container>
          <Container title="Educatonal Training" className=" bg-white border  border-grey-300 m-2 shadow-custom_sm">
              <EducationalPart subject="MBA - Information Technology" period="2020- Present" location="Tel Aviv University - Coller school of management." />
              <span className="block w-full h-1 border-b border-grey-300 "/>
              <EducationalPart subject="BSc. in Industrial Engineering and Management" period="2015- 2020" location="Afeka Academic College  of Engineering."/>
              <span className="block w-full h-1 border-b border-grey-300 "/>
              <EducationalPart period="2014" subject="High school diploma " special location="Shaul Tchernichovsky High  School, Netanya."/>
          </Container>
          <Container title="Professional Skills" className=" bg-white border border-grey-300 m-2  shadow-custom_sm ">
            <div className="p-2">
              <Skill rate={9.5} skill="ReactJS"/>
              <Skill rate={9.5} skill="NodeJS"/>
              <Skill rate={9} skill="Python"/>
              <Skill rate={10} skill="MongoDB"/>
              <Skill rate={9} skill="SQL (postgreSQL | mySQL)"/>
              <Skill rate={8.5} skill="GCP "/>
              <Skill rate={7} skill="Azure"/>
              <Skill rate={7} skill="AWS"/>
              <Skill rate={10} skill="Git"/>

            </div>
          </Container>
          <Container title="Career Summary" className=" bg-white border border-grey-300 m-2  shadow-custom_sm ">
          <div className=" text-grey-700">
            <h1 className="underline text-xs">01.2017 - Present</h1>
            <h2 className="font-bold text-base">Full Stack Engineer - Freelance </h2>
            <div className="text-sm  m-auto">
              <label>
                Some of my projects:
              </label>
              <ul className="flex  text-xs flex-wrap m-auto ">
                <Project 
                jobType="Consultant"
                color="yellow"
                link="https://splitit.com"
                img="https://cdn.shortpixel.ai/spai/ret_img/https://www.splitit.com/wp-content/uploads/2020/04/logo-1.svg"
                description="Maintaining and developing exisiting product"
                period="8 months"
                company="Splitit LTD"
                // users=""
                />
                <Project 
                jobType="Co-Founder"
                color="pink"
                link="https://meetee.ai"
                img="https://meetee.ai/static/media/Group5.fe1c4b08.svg"
                description="Managers and their teammates should get the best from their meetings,by using less “platform” and more AI to create meeting that work for them."
                period="1 year"
                company="Meetee.ai "
                // users="40,000 weekly users"
                />
                <Project 
                jobType="Consultant"
                color="yellow"
                link="http://truckiby.com/"
                img="https://www.truckiby.com/images/brand.png"
                description="Developing new Version of the product from scratch"
                period="6 months"
                company="Truckiby"
                // users=""
                />
                <Project 
                jobType="Consultant"
                color="yellow"
                link="https://www.8200ac.com/"
                img="https://media-exp1.licdn.com/dms/image/C4D0BAQE_nn5vG2WEoA/company-logo_200_200/0/1562238057530?e=1619049600&v=beta&t=FrN4aFVo_iGlISzi6XPoyweSDNpl6dWhsIQ6gYt9Pxg"
                description="Developing several projects in my main stack (MERN)"
                period="6 months"
                company="8200AC"
                // users=""
                />
                <Project 
                jobType="Freelance"
                color="green"
                link="https://zofim.org.il"
                img="https://upload.wikimedia.org/wikipedia/he/9/98/Emblem_of_the_Hebrew_Scouts_Movement_in_Israel.svg"
                description="Employee Evaluation System"
                // period="6 months"
                company="Israeli scouts "
                users="500 monthly users"
                />
                <Project 
                jobType="Freelance"
                color="green"
                link="https://zofim.org.il"
                img="https://upload.wikimedia.org/wikipedia/he/9/98/Emblem_of_the_Hebrew_Scouts_Movement_in_Israel.svg"
                description="Covid-19 Medical Approvement System"
                // period="6 months"
                company="Israeli scouts "
                users="40,000 weekly users"
                />
                <Project 
                jobType="Volunteering"
                color="red"
                link="https://sitterseeker.robins.app"
                img="https://sitterseeker.robins.app/images/newL.png"
                description="Sitter Seeker App (Covid-19 volunteer project)"
                period="2 months"
                company="Microsoft Hackathon "
                // users="40,000 weekly users"
                />

              </ul>
              
            </div>
          </div>
          </Container>
        </div>
      </div>
    </div>
  )
}
