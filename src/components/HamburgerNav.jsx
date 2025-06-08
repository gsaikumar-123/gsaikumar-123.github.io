export default function HamburgerNav({ isMenuOpen, toggleMenu }) {
  return (
    <nav id="hamburger-nav" className="lg:hidden flex justify-between items-center h-[17vh] px-4">
      <div className="logo text-2xl hover:cursor-default">Sai Kumar Golla</div>
      <div className="hamburger-menu relative inline-block">
        <div 
          className={`hamburger-icon flex flex-col justify-between h-6 w-[30px] cursor-pointer transition-all duration-300 ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
        <div className={`menu-links absolute top-full right-0 bg-white w-fit max-h-0 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[300px]' : ''}`}>
          <li className="list-none">
            <a href="#about" onClick={toggleMenu} className="block px-2.5 py-2 text-center text-2xl text-black no-underline transition-all duration-300">About</a>
          </li>
          <li className="list-none">
            <a href="#techstack" onClick={toggleMenu} className="block px-2.5 py-2 text-center text-2xl text-black no-underline transition-all duration-300">Tech Stack</a>
          </li>
          <li className="list-none">
            <a href="#projects" onClick={toggleMenu} className="block px-2.5 py-2 text-center text-2xl text-black no-underline transition-all duration-300">Projects</a>
          </li>
          <li className="list-none">
            <a href="#coding-activity" onClick={toggleMenu} className="block px-2.5 py-2 text-center text-2xl text-black no-underline transition-all duration-300">Coding Activity</a>
          </li>
          <li className="list-none">
            <a href="#contact" onClick={toggleMenu} className="block px-2.5 py-2 text-center text-2xl text-black no-underline transition-all duration-300">Contact</a>
          </li>
        </div>
      </div>
    </nav>
  )
}