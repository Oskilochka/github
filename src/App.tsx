import React, {useEffect, useState} from 'react';
import './App.scss';
import {SearchBox} from "./components/search-box/SearchBox";
import {ReposWrap} from "./components/repos-wrap/ReposWrap";
import {githubAPI} from "./api/api";

function App() {
    const [repos, setRepos] = useState<any>()
    const [inputName, setInputName] = useState("")

    useEffect(() => {
        githubAPI.getReposByName(inputName).then(res => setRepos(res.items))
    }, [])

    const filteredRepos = repos?.filter((item: any) =>
        item.name.toLowerCase().includes(inputName)
    )

    return (
        <div className="App">
            <header className="App-header">
                <h1>App that search repos in Github by name</h1>
            </header>
            <div className='content'>
                <SearchBox setInput={setInputName} />
                <ReposWrap repos={filteredRepos}/>
            </div>
        </div>
    );
}

export default App;
