import about_profile from '../../assets/about_profile.svg';
import SectionTitle from '../SectionTitle.jsx';
import './About.css';

export default function About() {
    return (
        <div className='about'>
            <SectionTitle title='About Me' />
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={about_profile} alt='About Image' />
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>
                            With a deep passion for creating high-performing,
                            visually stunning websites, I specialize in
                            WordPress development, custom themes/plugins, and
                            site optimization. Over the years, I’ve helped
                            businesses across e-commerce, tourism, and public
                            services bring their digital visions to life.
                        </p>
                        <p>
                            I thrive at the intersection of code, design, and
                            user experience, ensuring every website I build is
                            not just functional but also optimized for speed,
                            SEO, and accessibility. From front-end precision
                            (HTML, CSS, JavaScript, React) to powerful backend
                            solutions (PHP, MySQL, APIs), I craft solutions that
                            elevate brands online.
                        </p>
                        <p>
                            Beyond development, I excel in problem-solving,
                            collaboration with designers & clients, and project
                            management. My experience in IT support has honed my
                            ability to troubleshoot efficiently and ensure
                            seamless digital operations.
                        </p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'>
                            <p>HTML/CSS</p>
                            <hr style={{ width: '50%' }} />
                        </div>
                        <div className='about-skill'>
                            <p>Wordpress</p>
                            <hr style={{ width: '80%' }} />
                        </div>
                        <div className='about-skill'>
                            <p>React JS</p>
                            <hr style={{ width: '60%' }} />
                        </div>
                        <div className='about-skill'>
                            <p>Javascript</p>
                            <hr style={{ width: '70%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-achievements'>
                <div className='about-achievement'>
                    <h2>10+</h2>
                    <p>years of experience</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h2>90+</h2>
                    <p>projects completed</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h2>15+</h2>
                    <p>happy clients</p>
                </div>
            </div>
        </div>
    );
}
