import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Container = ({title,children,...props}) => (
  <div  className={" p-2 rounded-xl flex-cv my-2 md:m-4 relative  " + props.className}>
    <h1 className="text-custom-400 font-bold mb-4">
      {title}
    </h1>
    {children}
  </div>
)

const DetailPart = ({children,label}) => (
  <div className="my-2 text-grey-700 text-sm">
    <h2 className="font-bold">
      {label}
    </h2>
    {children}
  </div>
)

export default function Home() {
  return (
    <div className=" w-full p-3 md:p-8 h-full md:h-screen" 
    >
      <Head>
        <title>Aviram Roisman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-grey-100 shadow-custom p-4 md:p-8 rounded-xl h-full flex flex-wrap flex-col  md:pt-0 pt-14 ">
        <Container >
          <img 
            className="absolute shadow-xl rounded-full h-40 w-40 top-1/2 left-1/2 md:top-0 transform -translate-x-1/2 -translate-y-full md:-translate-x-1/2 md:-translate-y-0"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFam8KjIbqZGQ/profile-displayphoto-shrink_400_400/0/1610964003125?e=1616630400&v=beta&t=-enqL663-3Pg8Yg1k2YstuzzBN-fiERqY0Q2w3vz5ko"/>
          <personaldata className=" text-center  shadow-custom_sm  bg-custom-400 rounded-xl p-8 mt-16 flex flex-col text-white md:mt-28">
            <fullname className=" text-xl font-bold my-2">
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
        
        </Container>
        <Container title="Educatonal Training" className=" bg-white border  border-grey-300 m-2 shadow-custom_sm">

        </Container>
        <Container title="Career Summary" className=" bg-white border border-grey-300 m-2  shadow-custom_sm ">

        </Container>
        <Container title="Professional Skills" className=" bg-white border border-grey-300 m-2  shadow-custom_sm ">

        </Container>
        <Container title="Hobbies" className=" bg-white border border-grey-300 m-2  shadow-custom_sm ">

        </Container>
      </div>

    </div>
  )
}
