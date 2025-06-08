export default function Navbar() {
  return (
    <nav id="desktop-nav" className="hidden lg:flex justify-around items-center h-[17vh]">
      <div className="logo text-2xl cursor-default">Sai Kumar Golla</div>
      <ul className="nav-links flex gap-8 text-2xl">
        <li><a href="#about" className="text-black hover:text-gray-500 hover:underline underline-offset-4 decoration-gray-400 transition-all">About</a></li>
        <li><a href="#techstack" className="text-black hover:text-gray-500 hover:underline underline-offset-4 decoration-gray-400 transition-all">Tech Stack</a></li>
        <li><a href="#projects" className="text-black hover:text-gray-500 hover:underline underline-offset-4 decoration-gray-400 transition-all">Projects</a></li>
        <li><a href="#coding-activity" className="text-black hover:text-gray-500 hover:underline underline-offset-4 decoration-gray-400 transition-all">Coding Activity</a></li>
      </ul>
    </nav>
  );
}