import React, { useEffect, useState } from 'react'
import HooksMouse from './HooksMouse'

function MouseContainer() {
    const [display ,setDisplay] = useState()


    useEffect(() =>{
        console.log('useEffect')
    })
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle display</button>
        {display && <HooksMouse />}
    </div>
  )
}

export default MouseContainer