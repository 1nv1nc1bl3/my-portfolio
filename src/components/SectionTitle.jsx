import theme_pattern from '../assets/theme_pattern.svg';

export default function SectionTitle({ title }) {
    return (
        <div className='sectionTitle'>
            <h1>{title}</h1>
            <img src={theme_pattern} alt='Theme Icon' />
        </div>
    );
}
