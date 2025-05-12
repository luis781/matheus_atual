import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="flex justify-between items-center px-24 border-b border-gray-300">
      <div className="flex items-center gap-3">
        <Link to="/">
          <img src="../src/assets/futecoachlogo.png" width={100} alt="FuteCoach Logo" />
        </Link>
      </div>
      <nav className="flex items-center gap-12">
        <a href="/subscreva" className="text-xl font-semibold text-black hover:text-gray-600">Subscreva</a>
        <Link to="/sobre-nos" className="text-xl font-semibold text-black hover:text-gray-600">Sobre nós</Link>
        <Link to="/login" className="text-xl font-semibold text-black hover:text-gray-600">Login</Link>
      </nav>
    </header>
  );
}
