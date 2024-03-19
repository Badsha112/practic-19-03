import { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [open , setOpen]= useState(false);
  const routes = [
    { id: 1, path: '/home', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/products', name: 'Products' },
    { id: 5, path: '/contact', name: 'Contact' },
    { id: 6, path: '/gallery', name: 'Gallery' },
  ];

  return (
    <nav>
      <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <VscChromeClose></VscChromeClose>: <TfiMenuAlt></TfiMenuAlt>}
      </div>

      <ul className="md:flex">
        {routes.map(route => (
          <li key={route.id} className="mr-10 text-2xl font-bold">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
