import CV from './files/CV_SamuelMaximusLamere.pdf';

function About() {
    return (
    <section id="home" className="pt-36 bg-slate-300"> 
        <div className="container mx-auto px-8">
            <div className="flex flex-wrap ml-10">
                <div className="w-full self-center px-4 lg:w-1/2">
                    <h1 className="text-base font-semibold text-primary">Hello, everyone!👋
                    <span className="block font-bold text-slate-900">I'm Samuel Maximus Lamere</span></h1>
                    <h2 className="font-medium text-slate-500 text-lg mb-5">Web Developer | App Developer</h2>
                    <p className="font-medium text-slate-800 mb-10 leading-relaxed">
                        I am a passionate web and app developer with a wealth of experience in creating dynamic, intuitive, and user-friendly websites.
                        <br />
                        My enthusiasm for advanced technology inspires me to consistently explore and adopt innovative tools and frameworks.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-start sm:items-center gap-4">
                        <a href="#contact" className="inline-flex justify-center items-center text-base font-semibold text-white bg-primary py-3 px-8 rounded-full border border-primary hover:text-primary hover:shadow-lg hover:opacity-80 hover:bg-white transition duration-300 ease-in-out">Contact Me</a>
                        <a href={CV} 
                            download="CV_SamuelMaximusLamere.pdf" 
                            className="inline-flex justify-center items-center text-base font-semibold text-primary bg-white py-3 px-8 rounded-full border border-primary hover:text-white hover:shadow-lg hover:opacity-80 hover:bg-primary transition duration-300 ease-in-out">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="w-full self-end px-4 lg:w-1/2">
                    <div className="relative mt-10 lg:mt-9 lg:right-0">
                        <img src="./images/sam_red.png" alt="Samuel Maximus Lamere" className="relative mx-auto h-full z-20 mr-20"/>
                        <span className="absolute -bottom-20 z-0 left-1/2 -translate-x-1/2 md:scale-125">
                            <svg width="250" height="250" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#14b8a6" d="M38.4,-64C46,-54.8,45.9,-37.9,49.8,-24.2C53.7,-10.6,61.7,-0.3,61.6,9.7C61.5,19.7,53.4,29.4,43.7,
                                34.6C34.1,39.8,23.1,40.4,12.9,42.8C2.8,45.1,-6.4,49.2,-20.7,53C-34.9,56.7,-54.1,60.1,-66,53.3C-77.9,46.5,-82.5,29.5,-78.6,15.1C-74.7,0.7,-62.4,
                                -11.1,-54.6,-23.6C-46.8,-36.1,-43.5,-49.3,-35.1,-58.1C-26.8,-66.9,-13.4,-71.3,1,-72.8C15.4,-74.4,30.8,-73.1,38.4,-64Z" 
                                transform="translate(100 80) scale(0.9)"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default About;
