

const Navbar = () => {
  return (
    
    <nav className='w-full h-[50px] bg-color1 flex items-center '>

      <div className="flex justify-between w-[80%] mx-auto font-mono text-azure">
        <p className="font-bold text-xl">IQ-TASK</p>
        <ul className='flex justify-between gap-8'>
            <li className="cursor-pointer hover:font-bold hover:text-lg transition-all">HOME</li>
            <li className="cursor-pointer hover:font-bold hover:text-lg transition-all">YOUR TASKS</li>
        </ul>
      </div>
    </nav>
     
  )
}

export default Navbar
