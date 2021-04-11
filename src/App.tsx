import React, {useEffect, useState} from 'react';
import './App.scss';
import {SearchBox} from "./components/search-box/SearchBox";
import {ReposWrap} from "./components/repos-wrap/ReposWrap";
import {githubAPI} from "./api/api";
import {Pagination} from "./components/pagination/Pagination";

function App() {
    const [repos, setRepos] = useState<any>()
    const [inputName, setInputName] = useState('github-search-repos-betterMe')
    const totalReposCount = repos?.total_count
    const per_page = 30
    const [currentPage, setPage] = useState(1)
    const onPageChange = (currentPage: number) => {
        setPage(currentPage)
    };

    useEffect(() => {
        /*To cache found data*/
      let x = localStorage.getItem(inputName + currentPage)
        if ( x ) {
            setRepos(JSON.parse(x!))
        } else {
            /*if the request is sent for the first time*/
            githubAPI.getReposByName(inputName, per_page, currentPage).then(res => {
                setRepos(res)
                localStorage.setItem(inputName + currentPage, JSON.stringify(res))
            })
       }
    }, [inputName, currentPage])

    return (
        <div className="App">
            <header className="App-header">
                <h1>App that search repos in Github by name</h1>
            </header>
            <div className='content'>
                <SearchBox setInput={setInputName}/>
                <Pagination totalReposCount={totalReposCount} currentPage={currentPage}  onPageChange={onPageChange} per_page={per_page} />
                {repos ?
                    <div>
                        <h4>Found {totalReposCount} repositories with <span>{inputName}</span></h4>
                        <h5>Sorted by stars</h5>
                        <ReposWrap repos={repos.items}/>
                    </div>
                    : null


                }
            </div>
        </div>
    );
}

export default App;
