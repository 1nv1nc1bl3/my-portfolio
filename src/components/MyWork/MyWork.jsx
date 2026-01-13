import './MyWork.css';
import mywork_data from '../../assets/mywork_data.js';
import arrow_icon from '../../assets/arrow_icon.svg';
import SectionTitle from '../SectionTitle.jsx';

export default function MyWork() {
    return (
        <div id='work' className='mywork'>
            <SectionTitle title='My Latest Work' />
            <div className='mywork-container'>
                {mywork_data.map((work) => (
                    <img key={work.w_no} src={work.w_img} alt='Work Image' />
                ))}
            </div>
            <div className='mywork-showmore'>
                <p>Show More</p>
                <img src={arrow_icon} alt='Arrow Icon' />
            </div>
        </div>
    );
}
