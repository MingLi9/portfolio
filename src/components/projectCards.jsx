import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
    const { img, alt, side, title, text } = props;
    const leftSide = (side === "Left" ? "Left" : "Right");
    const rightSide = (side === "Left" ? "Right" : "Left");
    const center = (side === "Center" ? true : false);
    return (
        <>
            {!center
                ?
                (
                    <div className='parent-sides'>
                        <div className={leftSide}>
                            <Link to="/projects"><img src={img} alt={alt} className="project-preview" /></Link>
                        </div>
                        <div className={rightSide}>
                            <h1>{title}</h1>
                            <h3>{text}</h3>
                        </div>
                    </div>
                )
                :
                (
                    <div className='parent-center'>
                        <div className="Center">
                            <h1>{title}</h1>
                            <h3>{text}</h3>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default ProjectCard;