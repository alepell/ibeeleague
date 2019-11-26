import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

export default function Home() {
  const [competidores, setCompetidores] = useState([]);

  useEffect( async () => {
    const response = await fetch('http://laranjeiraflor.com.br/wp-json/wp/v2/competidores');
    const data = await response.json();
   
    
    setCompetidores(data);
  }, []);

  return (
    <ul>
      {competidores.map(repo => (
        <li key={repo.id}>{repo.slug}</li>
      ))}
    </ul>
  );
}
