// import { useRef } from 'react';
import arrow from '../assets/arrow.png';

export default function CodingActivity() {
  // const heatmapRef = useRef(null);

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js';
  //   script.async = true;

  //   const link = document.createElement('link');
  //   link.rel = 'stylesheet';
  //   link.href = 'https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css';

  //   document.head.appendChild(link);
  //   document.body.appendChild(script);

  //   script.onload = () => {
  //       setTimeout(() => {
  //       if (window.GitHubCalendar) {
  //           window.GitHubCalendar(heatmapRef.current, 'gsaikumar-123', {
  //           responsive: true,
  //           tooltips: true,
  //           });
  //       }
  //       }, 0);
  //   };

  //   return () => {
  //       document.body.removeChild(script);
  //       document.head.removeChild(link);
  //   };
  //   }, []);


  return (
    <section id="coding-activity" className="relative py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Coding Activity</h1>
        
        {/* <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">GitHub Contributions</h2>
          <div 
            ref={heatmapRef} 
            className="github-calendar rounded-xl bg-white p-6 border border-gray-200 shadow-sm"
          >
            <p className="text-center text-gray-500">Loading GitHub contributions...</p>
          </div>
        </div> */}

        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold mb-8 text-center">Coding Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="https://www.geeksforgeeks.org/user/gsaikumar_123/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
            >
              <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201127103715/gfg4.png" alt="GeeksforGeeks" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">GeeksforGeeks</h3>
              <p className="text-gray-600 text-center">Solved 300+ problems</p>
            </a>

            <a 
              href="https://leetcode.com/u/gsaikumar_123/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">LeetCode</h3>
              <p className="text-gray-600 text-center">600+ problems solved</p>
            </a>

            <a 
              href="https://www.codechef.com/users/gsaikumar_123" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYQVq17d3AJTeHVrSidugpEx_LUhlYeO5DA&s" alt="CodeChef" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">CodeChef</h3>
              <p className="text-gray-600 text-center">3★ Rating (Max 1682)</p>
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-12">
            <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
            <img
                src={arrow}
                alt="Scroll to contact"
                className="h-8 w-8 animate-bounce"
            />
            </button>
        </div>
      </div>
    </section>
  );
}