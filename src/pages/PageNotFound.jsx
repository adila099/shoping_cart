import React from 'react'
import { useSelector } from 'react-redux'

const PageNotFound = () => {
  const { totalCount } = useSelector((state) => state.counter)
  console.log("🚀 ~ PageNotFound ~ totalCount:", totalCount)
  return (
    <div>
      Page Not Found {totalCount}
    </div>
  )
}

export default PageNotFound
