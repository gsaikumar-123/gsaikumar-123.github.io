export default function Navbar() {
  return (
    <nav id="desktop-nav" className="hidden lg:flex justify-around items-center h-[17vh]">
      <div className="logo text-2xl hover:cursor-default">Sai Kumar Golla</div>
      <div>
        <ul className="nav-links flex gap-8 list-none text-2xl">
          <li><a href="#about" className="text-black no-underline hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-gray-181 transition-all duration-300">About</a></li>
          <li><a href="#techstack" className="text-black no-underline hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-gray-181 transition-all duration-300">Tech Stack</a></li>
          <li><a href="#projects" className="text-black no-underline hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-gray-181 transition-all duration-300">Projects</a></li>
          <li><a href="#coding-activity" className="text-black no-underline hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-gray-181 transition-all duration-300">Coding Activity</a></li>
        </ul>
      </div>
    </nav>
  )
}