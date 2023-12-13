import React from 'react'
import Card from './Card.jsx'
import Filter from './Filter.jsx'
import Properties from './Properties.jsx'
const index = () => {
  const array=[1,2,3,4,5,6,7,8,9]
  return (
    <div  className="container"> 
 <Properties/>
 <Filter array={array}/>
 <Card array={array}/>
    </div>
  )
}

export default index

