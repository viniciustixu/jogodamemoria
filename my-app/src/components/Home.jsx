import cat from '../assets/images/cat.jpg';
import { Navigate } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <header>
        <img src={cat} alt='Cat image' />
        <h1>Memory game</h1>
      </header>
      <main>
        <button onClick={() => Navigate('/Settings')}>Settings</button>
      </main>
      <footer>
        <p>This website was created by Tixu</p>
      </footer>
    </>
  );
}
