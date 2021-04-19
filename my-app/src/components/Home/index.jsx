import { Link } from "react-router-dom";
import "./style.css";



const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi,</p>
                    <p>I am Ilya Rachitsky</p>
                    <p>Front-end Developer</p>
                </h1>
                <Link to="/about">
                    <button>More Information</button>
                </Link>
            </div>
            <div className="person">
                <img
                src={`${process.env.PUBLIC_URL}/mo-logo2.png`}
                alt="personal-picture"
                />
            </div>
        </div>
    );
};

export default Home
