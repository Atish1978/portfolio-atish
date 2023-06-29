

const Banner = () => {
    return (
        <div className="relative px-12 pt-24 bg-black mb-8">
        {/* Your banner content goes here */}
        <img src="/public/Atish-removebg-preview.jpg" alt="Banner" className="w-96 h-96 mx-auto" />
  
        {/* Transparent black shadow overlay */}
        <div className="absolute inset-0 bg-black opacity-40" />
  
        {/* Rest of your banner content */}
        <div className="absolute top-72 left-0 right-0 bottom-0 flex justify-left px-12 items-center">
          <h1 className="text-white text-4xl">I am Atish Dipankar Chakraborty <br /><span className="italic text-yellow-400">Web Developer</span> </h1>
        </div>
      </div>
    );
  };

export default Banner;