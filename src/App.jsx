
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
import Section3 from './content/Section3'
import Section3text from './content/Section3text'
import Divbutton from './content/Divbutton'
import Button3 from './content/Button3'
import Buttonfood from './content/Buttonfood'
import Divbtn from './content/Divbtn'
import Seaction3img from './content/Seaction3img'
import Div from './content/Div'
import Divtext from './content/Divtext'

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

      <Section3>
          <Section3text />
          <Divbutton name="Калорийность" about="Норма калорий позволяет достигать цели. Как расчитать? На сайте есть калькулятор">
            <Button3 name={<>900 ккал <br /> <span className='text-[13px]'>3 блюда</span></>} />
            <Button3 name={<>1 250 ккал  <br /> <span className='text-[13px]'>4 блюда</span></>} />
            <Button3 name={<>1 600 ккал  <br /> <span className='text-[13px]'>5 блюда</span></>} />
            <Button3 name={<>2 050 ккал  <br /> <span className='text-[13px]'>6 блюда</span></>} />
            <Button3 name={<>индивидуально  <br /> <span className='text-[13px]'>подобрать</span></>} />
          </Divbutton>
          <Divbutton name="Продолжительность">
            <Button3 name={<>Пробные 2 дня <br /> <span className='text-[13px]'>за 2 900 ₽</span></>} />
            <Button3 name={<>1 неделя  <br /> <span className='text-[13px]'>1 700 ₽ в день</span></>} />
            <Button3 name={<>2 недели  <br /> <span className='text-[13px]'>1 600 ₽ в день</span></>} />
            <Button3 name={<>3 недели  <br /> <span className='text-[13px]'>1 520 ₽ в день</span></>} />
            <Button3 name={<>4 недели  <br /> <span className='text-[13px]'>1 450 ₽  в день</span></>} />
          </Divbutton>
          <Divbtn name="Пример недельного рациона" about="6 блюд. Калорийность — 1 235 ккал. Белки — 103 г; жиры — 37 г; углеводы — 120 г">
            <Buttonfood name="понедельник"/>
            <Buttonfood name="понедельник"/>
            <Buttonfood name="понедельник"/>
            <Buttonfood name="понедельник"/>
            <Buttonfood name="понедельник"/>
            <Buttonfood name="понедельник"/>
          </Divbtn>
          <Seaction3img />
          <Div name="1 250 ккал за 1 600 ₽ в день">
            <Greenbutton name="Заказать 10 дней питания за 16 000 ₽" />
            <Divtext />
          </Div>
      </Section3>
    </div>
  )
}

export default App
