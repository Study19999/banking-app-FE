import image1 from '../../images/image1.png';

function Header() {
    return (
        <div>
            <img src={image1} alt="image1" height={150} width={330} />
            <img src={image1} alt="image1" height={150} width={330} />
            <img src={image1} alt="image1" height={150} width={330} />
        </div>
    )
}
export default Header;