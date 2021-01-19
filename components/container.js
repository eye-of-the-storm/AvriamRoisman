export const Container = ({title,children,...props}) => (
    <div className=" flex relative md:max-w-1/3" >
      <div  className={" p-2 rounded-xl flex-cv my-2 md:m-4 relative  " + props.className} >
        <h1 className="text-custom-400 font-bold mb-4">
          {title}
        </h1>
        {children}
      </div>
    </div>
  )