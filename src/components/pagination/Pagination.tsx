import React, {FC, useState} from "react";
import './style.scss'

type PropsType = {
    totalReposCount: number,
    per_page: number,
    currentPage: number,
    onPageChange: any
}

export const Pagination: FC<PropsType> = ({totalReposCount, currentPage, per_page, onPageChange}) => {

    const pagesCount = Math.ceil(totalReposCount / per_page)
    let pages: Array<number> = []
    const portionSize = 5
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(
        Math.ceil(currentPage / portionSize)
    );
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    const prevPage = () => {
        setPortionNumber(portionNumber - 1);
        onPageChange(leftPortionPageNumber - 1);
    };
    const nextPage = () => {
        setPortionNumber(portionNumber + 1);
        onPageChange(rightPortionPageNumber + 1);
    };
    return (
        <div className='pagination'>
            {portionNumber > 1 && (
                <button
                    onClick={() => {
                        prevPage();
                    }}>
                    Prev
                </button>
            )}
            <div>
                {pages
                    .filter(
                        (item) =>
                            item >= leftPortionPageNumber &&
                            item <= rightPortionPageNumber
                    )
                    .map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                if (currentPage === item) return null;
                                onPageChange(item);
                            }}
                            className= {` pageNumber  + ${
                                currentPage === item && "selectedPage" }`}
                        >
                            {item}
                        </button>
                    ))}
            </div>
            {portionCount > portionNumber && (
                <button
                    onClick={() => {
                        nextPage();
                    }}>
                    Next
                </button>
            )}
        </div>
    )
}

