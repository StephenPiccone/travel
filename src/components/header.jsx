import globe from '../assets/globe.png'
function Header(){
    return(
        <header className="header">
            <img src={globe} className='header-globe' alt='globe' />
            <h1 className='header-txt'>My Travel Journal</h1>
        </header>
    )
}

export default Header