import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ErrorRoute() {
  const [timer, setTimer] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer === 0) {
      navigate('/');
      return;
    }

    const timeout = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer, navigate]);

  return (
    <>
      <p>Oops, this webpage wasn't found</p>
      Returning to <Link to='/'>Home</Link> in {timer} seconds...
    </>
  );
}
