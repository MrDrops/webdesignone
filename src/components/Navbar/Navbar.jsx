import DropMenu from './DropMenu';
import Search from './Search';

function Navbar() {
  return (
    <nav>
      <div className='corp-logo'>
        NameLogo
      </div>
      <ul className='nav-menu'>
        <li>
          <DropMenu />
        </li>
        <li>
          Insights
        </li>
        <li>
          About Us
        </li>
        <li>
          Careers
        </li>
        <li>
          Contact
        </li>
      </ul>
      <ul className='search-container'>
        <li>
          Get Quote
        </li>
        <li>
          <Search />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar