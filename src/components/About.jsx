import about from '../assets/about-pic.jpg';
import arrowIcon from '../assets/arrow.png';

export default function About() {
  return (
    <section id="about" className="relative w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-lg font-semibold text-gray-600 mb-2">Get To Know More</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About Me</h1>
        </div>

        {/* Content Container - Now with equal height alignment */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          {/* Profile Image - Will match text height */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-full h-full max-w-md rounded-2xl overflow-hidden shadow-lg">
              <img
                src={about}
                alt="Profile picture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Text - Container will match image height */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
            <div className="bg-white p-6 rounded-xl border border-gray-200 h-full flex flex-col justify-center">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  I am a final-year B.Tech student specializing in Artificial Intelligence and Machine Learning at Gayatri Vidya Parishad. With a strong passion for problem-solving and a solid foundation in Data Structures and Algorithms, I enjoy translating complex problems into efficient, scalable solutions. My academic focus includes Machine Learning, Deep Learning, NLP, and Generative AI, complemented by hands-on experience in full-stack MERN development.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I led a winning team at an IIT Kharagpur hackathon where we built a real-time, AI-driven Video Proctoring Analysis system. This project sharpened my ability to work under pressure, lead innovation, and deliver results. My portfolio includes building intelligent systems that combine backend logic with real-time AI capabilities, reflecting my ability to merge theoretical knowledge with practical development skills.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I am a dedicated, proactive learner who thrives in fast-paced, collaborative environments. My strengths lie in analytical thinking, attention to detail, and a commitment to continuous learning. I aim to contribute my skills to innovation-focused roles that challenge me to push technical boundaries while creating real-world impact. Whether working independently or with a team, I bring focus, reliability, and enthusiasm to every project.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrow */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => document.getElementById('techstack')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <img
              src={arrowIcon}
              alt="Arrow icon"
              className="h-8 w-8 animate-bounce"
            />
          </button>
        </div>
      </div>
    </section>
  )
}