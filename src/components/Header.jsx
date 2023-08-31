import './header.css';

import logo from '/react.svg';
function Header() {
  const nav_items = ["home", "about", "contact"];
	return <header>
    <img className='logo' src={logo} alt="" />
    <nav>
      {
        nav_items.map((item,index) => {
          return <a href="#" key={index}>{item}</a>
        })
      }
    </nav>

  </header>;
}

export default Header;



