import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Missions', path: '/missions' },
  { label: 'Map', path: '/map' },
  { label: 'Profile', path: '/profile' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-cyan-400">
          Mission Tracker
        </h1>

        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-cyan-400 font-semibold'
                    : 'text-zinc-300 transition-colors hover:text-white'
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;