import theme_pattern from '../assets/theme_pattern.svg';

export default function SectionTitle({ title }) {
    return (
        <div className='sectionTitle'>
            <h2>{title}</h2>
            <img src={theme_pattern} alt='Theme Icon' />
        </div>
    );
}
