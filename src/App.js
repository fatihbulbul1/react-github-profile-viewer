import { useEffect, useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("fatihbulbul1");
  const [repos, setRepos] = useState([]);
  const fetcher = () => {
    fetch(`https://api.github.com/users/${input}`)
    .then(res => {
      if(res.ok)
      {
        res.json()
        .then(data => setData(data))

        fetch(`https://api.github.com/users/${input}/repos`)
        .then(res => res.json())
        .then(data => {
            setRepos(data.sort((a,b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 5))
        })
      }
    })
  }
  useEffect(() => {
    fetcher()
  } , [input])
  return (
    <div className="App">
      <Search setInput={setInput}/>
      <Card input={input} data={data} repos={repos} />
    </div>
  );
}

export default App;
