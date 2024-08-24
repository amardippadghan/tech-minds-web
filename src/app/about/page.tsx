import Dropdown from '@/components/Dropdown'
import React from 'react'

function About() {
  return (
    <>
      <h1>about page</h1>
       <Dropdown
       title='Dropdown'
       items={["item1" , "item2" , "item3"]}
       />
    </>
  )
}

export default About