import cat from '../assets/images/cat.jpg';
import { useNavigate } from 'react-router-dom';
import FooterComponent from './FooterComponent';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <img src={cat} alt='Cat image' />
        <h1>Memory game</h1>
      </header>
      <main>
        <button onClick={() => navigate('/newgame')}>New Game</button>
        <button onClick={() => navigate('/settings')}>Settings</button>
        <button onClick={() => navigate('/about')}>About</button>
      </main>
      <FooterComponent />
    </>
  );
}
