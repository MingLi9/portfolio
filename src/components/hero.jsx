import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <div className='parent-main'>
                <h2>I am a software engineer living in Venray, and in this website you can see what I am working on. <Link to="/projects">Read more</Link></h2>
            </div>
        </>
    );
};

export default Hero;