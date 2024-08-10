
import { Link, Outlet } from 'react-router-dom';

import './user.css';
export function User() {
    return(
       <>
        <h1>This user component.</h1>
      
        {/* Placeholder to display the nested route */}

        <button type="button" className='order'><Link to="order">Orders</Link></button>
        <button type="button" className='profile'><Link to="profile">Profile</Link></button>
        <Outlet></Outlet> 
       </>
    )
}