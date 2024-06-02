const Button = ({title, link}) => {
  return (
    <a href={link} className=" cursor-pointer">
      <button className="px-7 py-2 text-white bg-[#F02252] hover:bg-white hover:text-[#F02252] border-2 hover:border-[#F02252] transition-all duration-200 rounded-full">
          <label className="bold-16 whitespace-nowrap">{title}</label>
      </button>
    </a>
  )
}

export default Button 