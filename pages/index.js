import {useState} from 'react'
import Head from 'next/head'
import {Project,Container,Skill,DetailPart,EducationalPart,WithTooltip} from '../components'


export default function Home() {
  return (
    <div className=" w-full p-3 md:p-8 h-full md:h-ddscreen lg:h-dscreen" 
    >
      <Head>
        <title>Aviram Roisman </title>
        <link rel="icon" href="https://twemoji.maxcdn.com/2/svg/1f9b8.svg" />
      </Head>
      <div 
      className="flex bg-grey-100 h-full p-4 shadow-custom rounded-xl md:pt-0"
      // className=" bg-grey-100 shadow-custom p-4 md:p-8 rounded-xl h-full flex md:pt-0 pt-14 "
      >
        <div 
        className="flex flex-col w-full flex-wrap h-full content-center"
        // className="w-full md:w-full md:mx-auto h-full flex flex-wrap flex-col justify-center content-center  "
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
            <div className="flex justify-around  ">
              <div className="mr-2">
              🥋  Karate Black belt
              </div>
              <div>
              🧗‍♀️  Rock Climb 
                </div>
            </div>
            <div className="flex justify-around mt-2">
              <div className="mr-2">
              👥 Team Player
              </div>
              <div>
              📚 Autodidact
                </div>
            </div>
            <div className="w-4/5" >
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
            <h1 className="underline text-xs">2017 - Present</h1>
            <h2 className="font-bold text-base">Full Stack Engineer - Freelance </h2>
            <div className="text-sm  m-auto">
              <label>
                Some of my projects:
              </label>
              <ul className="flex  text-xs flex-wrap m-auto justify-center ">
                <Project 
                jobType="Consultant"
                color="yellow"
                link="https://splitit.com"
                img="https://cdn.shortpixel.ai/spai/ret_img/https://www.splitit.com/wp-content/uploads/2020/04/logo-1.svg"
                description="Maintaining and developing exisiting product"
                period="8 months"
                company="Splitit LTD"
                tech="ReactJS"
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
                tech="ReactJS, NodeJS, Python, MongoDB, ML NLP"
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
                tech="ReactJS, NodeJS, MongoDB"
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
                tech="ReactJS, Python, PostgreSQL"
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
                tech="ReactJS, NodeJS, MongoDB"
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
                tech="ReactJS, NodeJS, MongoDB"
                />
                <Project 
                jobType="Volunteering"
                color="red"
                link="https://sitterseeker.robins.app"
                img="https://sitterseeker.robins.app/images/newL.png"
                description="Sitter Seeker App (Covid-19 volunteer project)"
                period="2 months"
                company="Microsoft Hackathon "
                tech="ReactJS, NodeJS "
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
