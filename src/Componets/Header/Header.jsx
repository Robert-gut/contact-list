import './Header.css'

import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <>
        <h1>Header</h1>
        <Link to='/'>
        Contact List
        </Link>
        <br/>
        <Link to='/new-contact'>
        Add Contact
        </Link>
        </>
    )
}

export default Header