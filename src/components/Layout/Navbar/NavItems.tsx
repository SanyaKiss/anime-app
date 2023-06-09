import { Fragment } from "react";
import { Link } from "react-router-dom";

export function NavItems() {
   return (
      <Fragment>
         <Link to='/' className='hover:bg-gray-700 p-2 rounded-md transition-all duration-300'>
            Home
         </Link>
         <Link to='/search' className='hover:bg-gray-700 p-2 rounded-md transition-all duration-300'>
            Genres
         </Link>
         <Link to='/favorites' className='hover:bg-gray-700 p-2 rounded-md transition-all duration-300'>
            Favorites
         </Link>
      </Fragment>
   );
}