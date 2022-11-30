import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link data-testid={'main-link'} to={'/'}>Main</Link>
      <Link data-testid={'about-link'} to={'/about'}>About</Link>
      <Link data-testid={'users-link'} to={'/users'}>Users</Link>
    </div>
  );
};

export default Navbar;