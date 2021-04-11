import React, {FC, useState} from "react";
import './style.scss'

type PropsType = {
    totalReposCount: number,
    per_page: number,
    currentPage: number,
    onPageChange: (value: any) => void
}

export const Pagination: FC<PropsType> = ({totalReposCount, currentPage, per_page, onPageChange}) => {
    const portionSize = 5
    let pages: Array<number> = []

    const pagesCount = Math.ceil(totalReposCount / per_page)
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(
        Math.ceil(currentPage / portionSize)
    )

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    const prevPage = () => {
        setPortionNumber(portionNumber - 1)
        onPageChange(leftPortionPageNumber - 1)
    }
    const nextPage = () => {
        setPortionNumber(portionNumber + 1)
        onPageChange(rightPortionPageNumber + 1)
    }

    return (
        <div className='pagination' data-testid='pagination'>
            {portionNumber > 1 && (
                <button onClick={() => prevPage()} className='pagination_btn'>
                    Prev
                </button>
            )}
            <div>
                {pages.filter(
                        (item) =>
                            item >= leftPortionPageNumber &&
                            item <= rightPortionPageNumber
                    ).map((item) => (
                        <button key={item} onClick={() => currentPage !== item && onPageChange(item)}
                                className={` pagination-pageNumber  + ${currentPage === item && "pagination-selectedPage"}`} >
                            {item}
                        </button>
                    ))}
            </div>
            {portionCount > portionNumber && (
                <button onClick={() => nextPage()} className='pagination_btn'>
                    Next
                </button>
            )}
        </div>
    )
}

