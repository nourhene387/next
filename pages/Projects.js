import Image from 'next/image';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import styles from '../styles/project.module.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'project1',
      description: 'A responsive portfolio website built with Next.js and Tailwind CSS',
      technologies: ['Next.js', 'Tailwind CSS', 'React'],
    
    },
    {
      id: 2,
      title: 'project 2',
      description: 'A responsive portfolio website built with Next.js and Tailwind CSS',
      technologies: ['Next.js', 'Tailwind CSS', 'React'],
     
    },
    {
      id: 3,
      title: 'project 3',
      description: 'A responsive portfolio website built with Next.js and Tailwind CSS',
      technologies: ['Next.js', 'Tailwind CSS', 'React'],
     
    },
    {
      id: 4,
      title: 'project 4',
      description: 'A responsive portfolio website built with Next.js and Tailwind CSS',
      technologies: ['Next.js', 'Tailwind CSS', 'React'],
     
    },
    // Add more projects here
  ];

  return (
    <div>
      <Navbar />
      <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
        <h1 className={`text-4xl font-bold mb-8 ${styles.title}`}>My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`border rounded-lg overflow-hidden shadow-lg ${styles.projectCard}`}
            >
             
              <div className={`p-4 ${styles.projectInfo}`}>
                <h2 className={`text-2xl font-semibold mb-2 ${styles.projectTitle}`}>
                  {project.title}
                </h2>
                <p className={`mb-4 ${styles.projectDescription}`}>
                  {project.description}
                </p>
                <div className={`flex flex-wrap gap-2 ${styles.projectTechStack}`}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm ${styles.techBadge}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
