import React, { useEffect } from 'react'
import './NewsApp.scss'
import NewsCard from '../../components/newscard/NewsCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../redux/slices/newsSlice'

function NewsApp() {

    const dispatch = useDispatch();

    const news = useSelector((state) => state.newsReducer.news);
    const userInput = useSelector((state) => state.userInputReducer.userInput)

    useEffect(() => {
        dispatch(fetchData(userInput))
    }, [dispatch, userInput])

    return (
        <div className='NewsApp'>
            <div className="NewsAp__newsList">
                {news.map((news) => {
                    return <NewsCard key={news.url} news={news} />
                })}

            </div>
        </div>
    )
}

export default NewsApp