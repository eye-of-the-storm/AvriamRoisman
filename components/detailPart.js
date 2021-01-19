export const DetailPart = ({children,label}) => (
    <div className="my-2 text-grey-700 text-sm">
      <h2 className="font-bold">
        {label}
      </h2>
      {children}
    </div>
  )
  