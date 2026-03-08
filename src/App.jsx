import React from 'react'
import "./style/App.css"
import Nav from './content/Nav'
import Navbar from './content/Navbar'
import Buttonnav from './content/Buttonnav'
import Nav2 from './content/Nav2'
import Logo from './content/logo'
import Navigation from './content/navigation'
import Contactinfo from './content/contactinfo'
import Section1 from './content/seciton1'
import Section1text from './content/Section1text'
import Greenbutton from './content/Greenbutton'
import Borderbutton from './content/Borderbutton'
import Section1img from './content/Section1img'
import Section2 from './content/Section2'
import Section2text from './content/Section2text'
import Section2btn from './content/Section2btn'

const App = () => {
  return (
    <div className='w-full bg-[#FAF6F2]'>
      <Nav>
        <Navbar />
        <Buttonnav />
      </Nav>

      <Nav2>
        <Logo />
        <Navigation />
        <Contactinfo />
      </Nav2>

      <Section1>
        <div className='flex flex-col gap-10'>
          <Section1text />
          <div className='flex items-center gap-2'>
            <Greenbutton name="Подобрать питание" />
            <Borderbutton name="Получить консультацию" />
          </div>
        </div>
        <Section1img />
      </Section1>

      <Section2>
        <Section2text />
        <div className='flex items-center gap-8 flex-wrap lg:justify-start ' style={{marginTop:"30px"}}>
          <Section2btn  name="Ваш вес" />
          <Section2btn  name="Ваш рост" />
          <Section2btn  name="Ваш возраст" />
          <Section2btn  name="Активность" />
          <Section2btn  name="Выберите цель" />
          <Greenbutton  name="Рассчитать рацион" />
        </div>
      </Section2>
    </div>
  )
}

export default App
