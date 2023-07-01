import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti';


const Footer = () => {
    return (
        <footer>
            <div className="footer px-20 py-10 bg-black text-neutral-content">
                <div>
                    <img className="w-14 rounded-full" src="/Atish.jpg" alt="" />
                    <p>Atish Dipankar Chakraborty<br />Web Developer</p>
                </div>
                <div>
                    <span className="footer-title">My Social Sites</span>
                    <div className="grid grid-flow-col gap-4">
                        <a rel="noreferrer" href="https://www.facebook.com/atish.chakraborty.71" target="_blank" className='text-4xl'><TiSocialFacebook></TiSocialFacebook></a>
                       <a rel="noreferrer" href="https://twitter.com/AtishDi93284177" target="_blank" className='text-4xl'><TiSocialTwitter></TiSocialTwitter></a>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/atish-dipankar-695516190/" target="_blank"className='text-4xl'><TiSocialLinkedin></TiSocialLinkedin></a>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Contact Me</span>
                    <p>Pathantula, Sylhet 3100</p>
                    <p>Phone: +8801712828878</p>
                    <p>Email: atishanindya@gmail.com</p>
                </div>
            </div>

            <div className='flex-1 text-center bg-black pb-4 text-white'>
                <p>Copyright. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;