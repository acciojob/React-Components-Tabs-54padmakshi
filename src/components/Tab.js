import React from 'react'

function Tab(props) {
  return (
    <div className='tab'>
    
    <a href='' id= {`${props.tabNames}- Tab`} > {props.tabNames}</a>
    
    </div>
  )
}

export default Tab