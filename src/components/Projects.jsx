import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpeg';
import project3 from '../assets/project-3.webp';
import arrow from '../assets/arrow.png';

export default function Projects() {
  const projects = [
    { 
      id: 1, 
      title: "Video Proctorer", 
      image: project1,
      description: "AI-powered video proctoring system that detects suspicious activities during online exams using computer vision.",
      techStack: ["Python", "OpenCV", "Tkinter", "MediaPipe"],
      githubLink: "https://github.com/gsaikumar-123/Video_Proctoring_Analysis",
      demoLink: "https://youtu.be/UEQp5ftAoyg"
    },
    { 
      id: 2, 
      title: "Dev Connect", 
      image: project2,
      description: "Dev_Connect is a full-stack social networking app for developers and professionals. It allows users build a personalized network.",
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "FastAPI"],
      githubLink: "https://github.com/gsaikumar-123/Dev_Connect",
      demoLink: "https://youtu.be/-kOPqb8qySU"
    },
    { 
      id: 3, 
      title: "Stock Analyzer", 
      image: project3,
      description: "This predicts Tesla’s stock closing price for the next trading day based on historical market data and sentiment analysis of user comments in Twitter.",
      techStack: ["Python", "Pandas", "Streamlit", "PyTorch", "Scikit-learn"],
      githubLink: "https://github.com/gsaikumar-123/Stock_Analyzer",
      demoLink: "https://youtu.be/z6vUULk2uUw"
    },
  ];

  return (
    <section id="projects" className="relative w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg font-semibold text-gray-600 mb-2">Browse My Recent</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold transition-all duration-300 py-4 w-32 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-center"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold transition-all duration-300 py-4 w-32 rounded-full bg-gray-800 text-white hover:bg-black text-center"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => document.getElementById('coding-activity')?.scrollIntoView({ behavior: 'smooth' })}
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