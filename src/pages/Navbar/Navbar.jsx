import { Link } from "react-router-dom";
import { HiOutlineDownload} from "react-icons/hi";


  const handleDownload = () => {
    // Replace 'resume.pdf' with the actual path or URL of your resume file
    const resumePath = '/public/resume.pdf';

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumePath;

    // Set the download attribute and filename
    link.setAttribute('download', 'resume.pdf');

    // Simulate a click on the link to trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up the temporary link element
    document.body.removeChild(link);
  };


const Navbar = () => {
  return (
    <div className="navbar bg-black h-24 flex-none">
      <div className="navbar-start ps-6 flex-row">
        <img className="w-20 rounded-full" src="/public/Atish.jpg" alt="" />
        <div>
          <p className="ps-4 text-2xl text-yellow-400 font-bold">Atish Dipankar Chakraborty</p>
          <p className="ps-4 text-1xl text-white">Web Developer</p>

        </div>
      </div>

      <div className="navbar-center flex-auto items-center justify-center">

        <ul className="menu menu-horizontal px-1 items-center justify-center text-white text-1xl">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/skills'>Skills</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        
          <li><button onClick={handleDownload} className="btn btn-sm"><p className="text-yellow-600 font-extrabold text-xl"><HiOutlineDownload></HiOutlineDownload></p> Download Resume</button></li>
       

        </ul>


      </div>
    </div>
  );
};

export default Navbar;