export default function Footer() {
  return (
    <footer className="bg-white border mt-12 px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Add margin-bottom to the navigation links */}
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-base sm:text-lg font-medium text-gray-800 mb-8">
          <li>
            <a
              href="#about"
              className="hover:text-gray-500 hover:underline underline-offset-4 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#techstack"
              className="hover:text-gray-500 hover:underline underline-offset-4 transition"
            >
              Tech Stack
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-gray-500 hover:underline underline-offset-4 transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#coding-activity"
              className="hover:text-gray-500 hover:underline underline-offset-4 transition"
            >
              Coding Activity
            </a>
          </li>
          {/* Add Contact link to footer navigation for better accessibility */}
          <li>
            <a
              href="#contact"
              className="hover:text-gray-500 hover:underline underline-offset-4 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Add more margin between content and copyright text */}
        <div className="mt-8">
          <p className="text-sm text-gray-600">
            &copy; 2025 <span className="font-semibold">Sai Kumar Golla</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}