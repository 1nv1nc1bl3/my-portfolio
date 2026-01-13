import './Contact.css';
import SectionTitle from '../SectionTitle.jsx';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

export default function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append('access_key', 'da39c4fa-f806-4095-a44f-f39b610b9fb4');

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            alert('Your message has been sent successfully');
        }
    };

    return (
        <div id='contact' className='contact'>
            <SectionTitle title='Get in Touch' />
            <div className='contact-section'>
                <div className='contact-left'>
                    <h2>Let's talk</h2>
                    <p>
                        I'm currently available to take on new projects, so feel
                        free to get in touch anytime you want and talk about
                        anything you want me to work on.
                    </p>
                    <div className='contact-detail'>
                        <img src={mail_icon} alt='Mail Icon' />
                        <p>
                            <a href='mailto:webdev2@alkis.me'>
                                webdev2@alkis.me
                            </a>
                        </p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon} alt='Phone Icon' />
                        <p>
                            <a href='tel:00306900000000'>0030 6900000000</a>
                        </p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt='Marker Icon' />
                        <p>Chania, Crete - Greece</p>
                    </div>
                </div>

                <form onSubmit={onSubmit} className='contact-right'>
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter your name'
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter your email*'
                        required
                    />
                    <textarea
                        rows='8'
                        name='message'
                        placeholder='Share your thoughts'
                    ></textarea>
                    <button type='submit' className='contact-submit'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
