import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_img from '../../assets/profile_img.svg';

export default function Hero() {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt='Hero' />
            <h1>
                <span>I'm Alkis Karagiannis,</span> frontend developer based in
                Greece.
            </h1>
            <p>
                With a deep passion for creating high-performing, visually
                stunning websites, I specialize in WordPress development, custom
                plugins, and site optimization. Over the years, I’ve helped
                businesses across e-commerce, tourism, and public services bring
                their digital visions to life.
            </p>
            <div className='hero-action'>
                <div className='hero-btn hero-connect'>
                    <AnchorLink
                        className='anchor-link'
                        offset={50}
                        href='#contact'
                    >
                        Connect with Me
                    </AnchorLink>
                </div>
                <div className='hero-btn hero-resume'>Read my Resume</div>
            </div>
        </div>
    );
}
