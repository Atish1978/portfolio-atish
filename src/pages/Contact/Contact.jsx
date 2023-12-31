// import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhoneIncoming } from "react-icons/hi";
import { motion } from "framer-motion"
// import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti';
import { useState } from "react";



const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your email sending logic here
        console.log('Sending email...');
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };
    return (

        <motion.div
            initial={{ opacity: 0, y: -500 }} // Initial state of the animation
            animate={{ opacity: 5, y: 0 }} // Target state of the animation
            transition={{ duration: 1 }} // Animation duration
        >
            <div className="bg-base-200 py-8 my-8 px-12">
                <div className="flex flex-col-reverse lg:flex-row-reverse gap-4">
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.3747453326846!2d91.8664073154035!3d24.897785950876928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37504b4e8a2f5dc9%3A0xaa2c5d93f1f71ad!2sSylhet%203100%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1598580861437!5m2!1sen!2sus"
                        // width="50%"
                        height="screen"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        className="rounded-lg shadow-lg w-50% sm:w-1/2"
                    ></iframe>
                    {/* <div className="lg:pr-20">
                        <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
                        <hr className="border-b-4 border-yellow-500 w-28 mt-2 mb-4" />
                        <div className="flex gap-2 items-center text-xl mt-2">
                            <p className="text-yellow-500 font-bold"><HiOutlineLocationMarker></HiOutlineLocationMarker> </p>
                            <p>Sunrise Tower, Flat # 6/C, Pathantula, Sylhet-3100</p>
                        </div>
                        <div className="flex gap-2 items-center text-xl mt-2">
                            <p className="text-yellow-500 font-bold"><HiOutlinePhoneIncoming></HiOutlinePhoneIncoming> </p>
                            <p>+8801712828878 </p>
                        </div>
                        <div className="flex gap-2 items-center text-xl mt-2">
                            <p className="text-yellow-500 font-bold"><HiOutlineMail></HiOutlineMail> </p>
                            <p>atishanindya@gmail.com </p>
                        </div>
                        <div className="flex gap-8 mt-8 ps-8 text-yellow-500">
                        <a rel="noreferrer" href="https://www.facebook.com/atish.chakraborty.71" target="_blank" className='text-4xl'><TiSocialFacebook></TiSocialFacebook></a>
                       <a rel="noreferrer" href="https://twitter.com/AtishDi93284177" target="_blank" className='text-4xl'><TiSocialTwitter></TiSocialTwitter></a>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/atish-dipankar-695516190/" target="_blank"className='text-4xl'><TiSocialLinkedin></TiSocialLinkedin></a>
                        </div>
                    </div> */}
                    <div className=" w-50% sm:w-1/2 p-8 bg-white shadow rounded-lg">
                        <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
                        <hr className="border-b-4 border-yellow-500 w-28 mt-2 mb-4" />
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 w-full sm:text-sm rounded-md h-8 ps-2"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 w-full sm:text-sm rounded-md h-8 ps-2"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="mt-1 w-full shadow-sm sm:text-sm  rounded-md ps-2"
                                placeholder="Your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;