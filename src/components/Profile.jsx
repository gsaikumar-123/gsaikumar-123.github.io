import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';
import resume from '../assets/MyResume.pdf';

export default function Profile() {
  return (
    <section
      id="profile"
      className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 px-6 md:px-20 py-12 min-h-[80vh]"
    >
      {/* Text Section */}
      <div className="text-center md:text-left max-w-3xl">
        <p className="font-semibold text-2xl md:text-4xl">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold my-4">Sai Kumar Golla</h1>
        <p className="text-base md:text-xl text-gray-700 mb-6">
          AI & ML engineering undergraduate with strong algorithmic problem-solving skills and
          interest in full-stack development. Proven experience in building real-time,
          intelligent systems and winning national-level hackathon. Passionate about ML,
          scalable web solutions, and impactful innovation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-4">
          <button
            onClick={() => window.open(resume, '_blank')}
            className="px-6 py-3 rounded-full border border-gray-800 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-all"
          >
            Download CV
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 rounded-full bg-gray-800 text-white font-semibold hover:bg-black transition-all"
          >
            Contact Info
          </button>
        </div>

        {/* Socials */}
        <div className="flex justify-center md:justify-start gap-4 mt-2">
          <img
            src={linkedinLogo}
            alt="LinkedIn"
            className="w-8 h-8 cursor-pointer"
            onClick={() => window.location.href = 'https://www.linkedin.com/in/gsaikumar123'}
          />
          <img
            src={githubLogo}
            alt="GitHub"
            className="w-8 h-8 cursor-pointer"
            onClick={() => window.location.href = 'https://github.com/gsaikumar-123'}
          />
        </div>
      </div>
    </section>
  );
}
