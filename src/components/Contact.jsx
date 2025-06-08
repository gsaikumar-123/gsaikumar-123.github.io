import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 px-4 md:px-8 lg:px-16 bg-white pb-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl font-semibold text-gray-700">Get in Touch</p>
        <h1 className="text-4xl sm:text-5xl font-bold my-4">Contact Me</h1>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 border border-gray-300 rounded-2xl p-6 bg-gray-50 shadow-sm">
          {/* Email */}
          <div className="flex items-center gap-2">
            <img
              src={emailIcon}
              alt="Email"
              className="w-8 h-8"
            />
            <a
              href="mailto:gsaikumar2505@gmail.com"
              className="text-gray-800 text-lg hover:underline"
            >
              gsaikumar2505@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-2">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-8 h-8"
            />
            <a
              href="https://www.linkedin.com/in/gsaikumar123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-lg hover:underline"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
