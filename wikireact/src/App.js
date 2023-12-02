import { useState } from 'react';
import useWiki from './hooks/useWiki';
import './App.scss';

function App() {
  const { summary, searchError, searchWiki } = useWiki();
  const [input, setInput] = useState("");
  const [langOption, setLangOption] = useState("en");

  return (
    <>
      <input onChange={(ev) => setInput(ev.target.value)} value={input} className='input' placeholder='search...' />
      <select value={langOption} onChange={(ev) => setLangOption(ev.target.value)}>
        <option value='en'>English</option>
        <option value='id'>Indonesian</option>
      </select>
      <button onClick={() => searchWiki(input, langOption)}>Search Definition</button>
      <div className='summary'>{summary}</div>
    </>
  );
}

export default App;
