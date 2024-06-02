import Button from './Button'

const ProjectCards = ({ heading, imagePath, details, alt, demoLink, codeLink }) => {
  return (
    
    <div className='flex flex-col justify-between gap-4 items-center shadow-lg py-5 rounded-lg bg-white'>

        <h2 className='text-2xl font-bold text-center tracking-tighter border-b-2 border-[#F02252] px-4'>{heading}</h2>

        <div className='relative w-full group'>
        <img src={imagePath} alt={alt} className='h-auto w-full object-cover '/>
        <div className="hidden lg:group-hover:flex absolute inset-0 bg-[#0a192f] opacity-90"></div>
        <div className="hidden lg:group-hover:flex absolute inset-0 justify-center text-center items-center z-10 p-5">
            <h2 className="text-white">{details}</h2>
        </div>
        </div>

        <details className='text-center lg:hidden'>
            {details}
        </details>

        <div className='w-full flex gap-4 justify-center align-center mt-5'>
        <Button title={"Demo"} link={demoLink}/>
        <Button title={"Code"} link={codeLink}/>
        </div>

    </div>
  )
}

export default ProjectCards