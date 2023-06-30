import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhoneIncoming } from "react-icons/hi";
import { motion } from "framer-motion"



const Contact = () => {
    return (

        <motion.div
            initial={{ opacity: 0, y: -500 }} // Initial state of the animation
            animate={{ opacity: 5, y: 0 }} // Target state of the animation
            transition={{ duration: 1 }} // Animation duration
        >
            <div className="hero bg-base-200 py-8 my-8">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.3747453326846!2d91.8664073154035!3d24.897785950876928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37504b4e8a2f5dc9%3A0xaa2c5d93f1f71ad!2sSylhet%203100%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1598580861437!5m2!1sen!2sus"
                        width="600"
                        height="400"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        className="rounded-lg shadow-lg"
                    ></iframe>
                    <div>
                        <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
                        <div className="flex gap-2 items-center text-2xl mt-2">
                            <p className="text-yellow-500 font-bold"><HiOutlineLocationMarker></HiOutlineLocationMarker> </p>
                            <p>Pathantula, Sylhet-3100 </p>
                        </div>
                        <div className="flex gap-2 items-center text-2xl mt-2">
                            <p className="text-yellow-500 font-bold"><HiOutlinePhoneIncoming></HiOutlinePhoneIncoming> </p>
                            <p>+8801712828878 </p>
                        </div>
                        <div className="flex gap-2 items-center text-2xl mt-2">
                            <p className="text-yellow-500 font-bold"><HiOutlineMail></HiOutlineMail> </p>
                            <p>atishanindya@gmail.com </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;