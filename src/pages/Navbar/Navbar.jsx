import { Link } from "react-router-dom";
import { HiOutlineDownload } from "react-icons/hi";
import "./Navbar.css";


const handleDownload = () => {
  // Replace 'resume.pdf' with the actual path or URL of your resume file
  const resumePath = '/resume.pdf';

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
    <div className="navbar bg-black h-auto flex-none">
      <div className="navbar-start ps-6 flex-row">
        <img className="w-14 ms-8 rounded-full hidden lg:block" src="/Atish.jpg" alt="" />
        <div>
          <p className="ps-4 text-2xl text-yellow-400 font-bold"></p>
          <p className="ps-4 text-1xl text-white"></p>

        </div>
      </div>

      <div className="navbar-center flex-auto items-center justify-center">

        <ul className="menu menu-horizontal px-1 items-center justify-center   text-white text-1xl">
          <li className="hover:bg-yellow-500 rounded"><Link to='/'>Home</Link></li>
          <li className="hover:bg-yellow-500 rounded"><Link to='/about'>About</Link></li>
          <li className="hover:bg-yellow-500 rounded"><Link to='/skills'>Skills</Link></li>
          <li className="hover:bg-yellow-500 rounded"><Link to='/projects'>Projects</Link></li>
          <li className="hover:bg-yellow-500 rounded"><Link to='/contact'>Contact</Link></li>

        </ul>
        
       <div className="flex gap-4">
       <div >
          <button className="btn btn-sm mr-2"><a rel="noreferrer" href="https://github.com/Atish1978" target="_blank">GitHub</a></button>
        </div>
        <div className="flex">
          <button onClick={handleDownload} className="btn btn-sm"><p className="text-yellow-600 font-extrabold text-xl"><HiOutlineDownload></HiOutlineDownload></p>Resume</button>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Navbar;