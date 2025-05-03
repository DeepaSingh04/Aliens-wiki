import { useEffect, useState } from 'react';

const FooterClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = () => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return `${time.toLocaleTimeString()} ${time.toLocaleDateString(undefined, options)}`;
  };

  return (
    <footer style={{ marginTop: '2rem', textAlign: 'center' }}>
      <hr />
      <p>{formatDate()}</p>
    </footer>
  );
};

export default FooterClock;
