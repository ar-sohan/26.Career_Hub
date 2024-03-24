
const Banner = () => {
    return (
        <div className="hero bg-base-200 p-10">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-24">
                <img src="../../../public/images/user.png" className="rounded-lg items-end" />
                <div>
                    <h1 className="text-5xl font-bold">One Step Closer To Your <span>Dream Job</span></h1>
                    <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;