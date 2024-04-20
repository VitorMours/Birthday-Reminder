import React, {useState} from 'react';
import List from './list.js'
import data from './data.js'
import './App.css';

function App() {
  React.useEffect(() => {
    document.title = 'Birthday Reminder';
  }, []);

  const [people, setPeople] = useState(data);
  return <>
  <main>
    <section className='container'>
      <h2>{people.length} Birthdays in List</h2>
      <List people={people} />
      <button onClick={() => setPeople([])}>
        Clear all
      </button>
    </section>
  </main>
  <footer>
    <p>Site desenvolvido por: 
      <a  href="https://www.linkedin.com/in/joão-vitor-rezende-moura" target="_blank"> João Vítor Rezende Moura</a>
    </p>
    
    <p>
      
      <a href="https://www.youtube.com/watch?v=a_7Z7C_JCyo&t=438s" target="_blank"> Ideia original </a>
      do freeCodeCamp</p>

  </footer>
  </>
}

export default App;
