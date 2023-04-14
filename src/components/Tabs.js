import React from 'react'
import Tab from './Tab'

function Tabs({tabNames}) {
  return (
    <div className='tabs'>
     {
      tabNames.map (
        (value,index)=> ( <Tab key={index} value ={value} />) )
     }
    </div>
  )
}

export default Tabs