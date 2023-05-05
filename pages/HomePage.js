import React from 'react'
import GoogleBooksSearch from './GoogleBook'
import TopBooks from './TrendingBooks'
import Banner from './UI/Banner'

function HomePage() {
  return (
    <div>
        <Banner />
        <GoogleBooksSearch />
        <TopBooks />
    </div>
  )
}

export default HomePage