import { useState,useEffect } from 'react'
import './App.css'
import profileImg from './assets/profile.jpeg';
import InstaImg from './assets/instagramlogo.png';
import GithubImg from './assets/githublogo.png';
import LinkedinImg from './assets/linkedinlogo.png';
import ResumeImg from './assets/resumelogo.png';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const greeting = new Date().getHours();
  let message;
 
  if (greeting >= 5 && greeting < 12)
  {
    message = "Good Morning!";
  }
    else if (greeting >= 12 && greeting < 18)
    {
      message = "Good Afternoon!";
    }
    else
    {
      message = "Good Evening!";
    }
  
useEffect(() => {
    const dayNight = new Date().getHours();

    if (dayNight >= 18|| dayNight < 6) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);


  return (
    <>
    <main className={darkMode ? 'app dark' : 'app'}> {/* Apply 'dark' class when darkMode is true */}
      <button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}> {/* Toggles dark mode button on click */}
        {darkMode ? 'Day Mode' : 'Night Mode'}
      </button>
      <section className="profile-card">
        <img src={profileImg}  alt="Prabjot profile" className="profile-img" />
       <h1>Prabjot Pannu</h1>
       <p> Aspiring Software Engineer | Gilroy, CA | Bachelor of Science: Computer Science, CSUMB </p>
      </section>

 
      <section className="images-place">
  <div className="icons">
    <div className="icon-card">
    <a href = "https://www.instagram.com/itspj__" target="_blank" rel="noopener noreferrer"><img src={InstaImg} alt="Instagram logo" className="link-icon" /> 
    <p>Instagram</p> </a>
    </div>
    <div className="icon-card">
     <a href = "https://www.github.com/ItsPJ08" target="_blank" rel="noopener noreferrer">
      <img src={GithubImg} alt="GitHub logo" className="link-icon" />
      <p>GitHub</p> </a>
    </div>
    <div className="icon-card">
      <a href="https://www.linkedin.com/in/prabjot-pannu-b93955328/"  target="_blank" rel="noopener noreferrer">
      <img src={LinkedinImg} alt="LinkedIn logo" className="link-icon" /> 
      <p>LinkedIn</p> </a>
    </div>
  <div className="icon-card">
      <a href = "/PrabjotResume.pdf"  target="_blank" rel="noopener noreferrer">
      <img src={ResumeImg} alt="Resume" className="link-icon" /> 
      <p>My Resume</p> </a>
      
    </div>
  </div>

</section>
<section className = "greeting-place"> 
  <h2>{message}</h2>


</section>
 

   
     
  


    </main>
      
    </>
  )
}

export default App
