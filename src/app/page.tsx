import HeroElement from '@/components/hero'
import Mail from '@/components/mail'
import Tools from '@/components/tools'
import React from 'react'

const App = () => {
  return (
    <>
      <HeroElement />
      <div id="tools" className='pt-6'>
        <Tools />
      </div>
      <Mail />
    </>
  )
}

export default App