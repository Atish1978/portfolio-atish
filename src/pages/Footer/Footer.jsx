import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhoneIncoming } from "react-icons/hi";


const Footer = () => {
    return (
        <footer>
            <div className="footer px-20 py-10 bg-black text-neutral-content">
                <div>
                    <img className="w-14 rounded-full" src="/Atish.jpg" alt="" />
                    <p>Atish Dipankar Chakraborty<br /><span className='italic text-yellow-500'>Web Developer</span> </p>
                </div>
                <div>
                    <span className="footer-title">My Social Sites</span>
                    <div className="grid grid-flow-col gap-4">
                        <a rel="noreferrer" href="https://www.facebook.com/atish.chakraborty.71" target="_blank" className='text-4xl text-yellow-500 '><TiSocialFacebook></TiSocialFacebook></a>
                       <a rel="noreferrer" href="https://twitter.com/AtishDi93284177" target="_blank" className='text-4xl text-yellow-500 '><TiSocialTwitter></TiSocialTwitter></a>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/atish-dipankar-695516190/" target="_blank"className='text-4xl text-yellow-500 '><TiSocialLinkedin></TiSocialLinkedin></a>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Contact Me</span>
                    <div className="flex gap-2 items-center mt-2">
                            <p className="text-yellow-500 font-bold"><HiOutlineLocationMarker></HiOutlineLocationMarker> </p>
                            <p>Sunrise Tower, Flat # 6/C, Pathantula, Sylhet-3100</p>
                        </div>
                        <div className="flex gap-2 items-center mt-2">
                            <p className="text-yellow-500 font-bold"><HiOutlinePhoneIncoming></HiOutlinePhoneIncoming> </p>
                            <p>+8801712828878 </p>
                        </div>
                        <div className="flex gap-2 items-center mt-2">
                            <p className="text-yellow-500 font-bold"><HiOutlineMail></HiOutlineMail> </p>
                            <p>atishanindya@gmail.com </p>
                        </div>
                </div>
            </div>

            <div className='flex-1 text-center bg-black pb-4 text-white'>
                <p>Copyright. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;