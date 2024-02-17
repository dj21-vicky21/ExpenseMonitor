import React from 'react'
import Sidebar from '../_components/Sidebar'
import Container from '../_components/container'


function Home() {
  return (
    <div className='flex h-full'>
      <Sidebar />
      <Container />
    </div>
  )
}

export default Home