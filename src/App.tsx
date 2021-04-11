import React, {useEffect, useState} from 'react';
import './App.scss';
import {SearchBox} from "./components/search-box/SearchBox";
import {ReposWrap} from "./components/repos-wrap/ReposWrap";
import {githubAPI} from "./api/api";
import {Pagination} from "./components/pagination/Pagination";
import {Preloader} from "./components/preloader/Preloader";

export const App = () => {
    const [repos, setRepos] = useState<any>()
    const [inputName, setInputName] = useState('github-search-repos-betterMe')
    const [currentPage, setPage] = useState(1)
    const [error, setError] = useState<{} | undefined>(undefined);
    const [isFetching, setIsFetching] = useState(false);

    const totalReposCount = repos?.total_count
    //variable for api and pagination created to change it only here
    const per_page = 30

    const onPageChange = (currentPage: number) => setPage(currentPage);

    useEffect(() => {
        setIsFetching(true);
        /*To cache found data*/
        let x = localStorage.getItem(inputName + currentPage)
        if (x) {
            setRepos(JSON.parse(x!))
            setIsFetching(false);
        } else {
            /*if the request is sent for the first time*/
            githubAPI.getReposByName(inputName, per_page, currentPage).then(res => {
                setRepos(res)
                localStorage.setItem(inputName + currentPage, JSON.stringify(res))
                setIsFetching(false);
            }).catch((reason) => {
                setError(reason);
                setIsFetching(false);
            });
        }
    }, [inputName, currentPage])

    return (
        <div className="app">
            <header>
                <h1 className="app-title">App that search repos in Github by name</h1>
            </header>
            <div className='app-content'>
                <SearchBox setInput={setInputName}/>
                {isFetching ?
                    <Preloader />
                    : error ? alert('Some error')
                        : repos && <div>
                    <h4 className='app-content_title'>Found {totalReposCount} repositories with <span>{inputName}</span></h4>
                    <Pagination totalReposCount={totalReposCount} currentPage={currentPage} onPageChange={onPageChange}
                                per_page={per_page}/>
                    <ReposWrap repos={repos.items}/>
                </div>
                }
            </div>
        </div>
    )
}


