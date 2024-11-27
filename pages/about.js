import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import styles from '../styles/about.module.css';

export default function About() {
  const skills = [
    'React', 'Next.js', 'Tailwind CSS', 
    'JavaScript', 'TypeScript', 'Node.js'
  ];

  return (
    <div>
      <Navbar/>
<div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h1 className={`text-4xl font-bold mb-6 ${styles.headerTitle}`}>About Me</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img 
            src="https://tse3.mm.bing.net/th?id=OIP.JU3EGyTdkIYOwceFCD-9DAHaHa&pid=Api&P=0&h=180" 
            alt="Profile Picture" 
            className={`${styles.profileImage} w-full h-auto rounded-lg mb-6`} // Added custom class
          />
          <h2 className={`text-2xl font-semibold mb-4 ${styles.sectionTitle}`}>Professional Background</h2>
          <p className="mb-4">
            I'm a web developer with a passion for creating 
            efficient and beautiful web applications. 
            My journey in web development has been driven by 
            curiosity and a love for solving complex problems.
          </p>
        </div>
        <div>
          <h2 className={`text-2xl font-semibold mb-4 ${styles.sectionTitle}`}>Skills</h2>
          <div className={`flex flex-wrap gap-2 ${styles.skillsList}`}>
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className={`px-4 py-2 border border-gray-300 rounded-full text-sm font-semibold text-gray-800 ${styles.skillBadge}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
}
