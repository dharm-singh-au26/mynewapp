import React, { useEffect, useState } from 'react'

function DocTitleOne() {
    const [count,setCount] = useState(0)
    useEffect(() => {
        document.title = `count ${count}`
    } , [])
  return (
    <>
    <button onClick={() =>setCount(count +1 )} >  Count -- {count}</button>
    </>
  )
}

export default DocTitleOne