import { Link } from "react-router-dom";
// 

const Hero = () => {
    return (
        <div className="hero  -mt-20">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-5xl font-bold">Welcome to <span className="bg-gradient-to-r bg-300% from-primary  via-purple-500 to-green-400 text-transparent bg-clip-text animate-gradient ">ByteBlaze</span> </h1>
                    <p className="py-6">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
                    <div className="flex gap-3 justify-center">
                        <Link to='/blogs'><button className="btn btn-primary ">Read Blogs</button></Link>
                        <Link to='/bookmarks'><button className="btn btn-primary ">Bookmarks</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;