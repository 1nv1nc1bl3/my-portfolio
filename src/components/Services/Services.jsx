import './Services.css';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import SectionTitle from '../SectionTitle.jsx';

export default function Services() {
    return (
        <div id='services' className='services'>
            <SectionTitle title='My Services' />
            <div className='services-container'>
                {Services_Data.map((service) => (
                    <div className='services-format' key={service.s_no}>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className='services-readmore'>
                            <p>Read More</p>
                            <img src={arrow_icon} alt='Arrow Icon' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
