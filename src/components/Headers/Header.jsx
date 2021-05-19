import React from 'react'
import {Link , NavLink }  from 'react-router-dom'

const style = { 
    color:'white',
    backgroundColor: 'black'
}

const Header = (props) => {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            <img scr='../../images/descarga.jpg' alt='Logo'/>
                        </Link>
                    </li>
                    <li>
                        <NavLink to='/books' activeStyle={style}>
                            Books 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/users' activeStyle={style}>
                            Users 
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;