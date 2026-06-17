import logo from '../assets/tran-logo.jpeg';

function Header(){
    return(
        <div className="sign-in-header">
            <img src={logo} alt="ANIFLIX Logo" className='sign-in-logo' />
        </div>
    )
}

export default Header;