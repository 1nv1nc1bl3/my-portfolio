import './Contact.css';
import SectionTitle from '../SectionTitle.jsx';

export default function Contact() {
    return (
        <div className='contact'>
            <SectionTitle title='Get in Touch' />
            <div className='contact-sections'>
                <div className='contact-left'>
                    <h2>Let's talk</h2>
                    <p>
                        I'm currently available to take on new projects, so feel
                        free to get in touch anytime you want and talk about
                        anything you want me to work on.
                    </p>
                    <div className='contact-detail'></div>
                    <div className='contact-detail'></div>
                    <div className='contact-detail'></div>
                </div>
                <div className='contact-right'>
                    <form action=''>
                        <input type='text' placeholder='name' />
                        <input type='email' placeholder='email*' required />
                        <textarea name='' id=''>
                            Share your thoughts
                        </textarea>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
