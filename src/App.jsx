import React from 'react'
import Card from './companent/card'
import Button from './companent/Button'
import user from './assets/image.png'
import logo from './assets/7 (2).svg'
import logo1 from './assets/7 (3).svg'
import text from './assets/Аналитика и оцифровка продаж Wildberries и Ozon.png'
import group3 from './assets/Group 3 (2).png'
import fram12 from './assets/Frame 12.png'
import fram13 from './assets/{7D728322-0C26-461B-9F3F-32F3EF30E592}.png'
import remove from './assets/[removal 1 (2).png'
import remove1 from './assets/[removal 3 (2).png'
import frame32 from './assets/Frame 32 (1).png'
import frame63 from './assets/Frame 63.png'
import frame69 from './assets/Frame 69 (1).svg'
import remov2 from './assets/Remove-bg_ai_1691479932588-transformed 1.png'
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
    <div>
      <Card img={user} name="My card" about="I am Abdulloh i am learning react" color={"red"}>
      <Button />
      </Card>
      <nav className='navbar'>
        <img className='img' src={logo1} alt="" />
        <div className='btnimg'>
          <img src={logo} alt="" />
          <img src={text} alt="" />
        </div>
        <div className='divp'>
          <p>О нас</p>
          <p>Возможности</p>
          <p>Тарифы</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span><svg style={{ width: "20px", color: "green" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
            </span>
            <p className='back'>Вход</p>
            <span className='iconburger'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </span>
          </div>
          <button className='btnlogin'>Зарегистрироваться</button>
        </div>
      </nav>

      <main>
        <section className='section'>
          <div className='div2'>
            <h1>Внутренняя аналитика и финансовый учёт для бизнеса на маркетплейсах</h1>
            <p className='pname2'>Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и анализе отчётов</p>
            <div className='div3'>
              <p className='pname'>Начните свой 3-дневный пробный период с неограниченным доступом ко всем возможностям</p>
              <div className='div4'>
                <input type="text" placeholder='Введите ваш email' />
                <button className='btn1'>Попробовать</button>
              </div>
            </div>
          </div>
          <div>
            <img className='img1' src={group3} alt="" />
          </div>
        </section>

        <section className='section1'>
          <div className='div777'>
            <h1 style={{ color: "blue" }}>777</h1>
            <p>Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и анализе отчётов</p>
          </div>
          <div className='div777'>
            <h1 style={{ color: "blue" }}>5</h1>
            <p>Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и анализе отчётов</p>
          </div>
          <div className='div777'>
            <h1 style={{ color: "blue" }}>100 000</h1>
            <p>Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и анализе отчётов</p>
          </div>
        </section>

        <section className='section2'>
          <h1>Возможности сервиса</h1>
          <img className='img2' src={fram12} alt="" />
          <img className='img3' src={fram13} alt="" />
        </section>

        <section className='section4'>
          <div className='div5'>
            <h1 style={{ fontSize: "30px" }}>Начните экономить своё время</h1>
            <p>3-дневный пробный период с неограниченным доступом ко всем возможностям</p>
            <div className='div4'>
              <input type="text" placeholder='Введите ваш email' />
              <button>Попробовать</button>
            </div>
          </div>
          <div>
            <img className='imgposition' src={remove} alt="" />
          </div>
        </section>

        <section className='section5'>
          <div className='div6'>
            <h1>Собираем единые отчёты по всем вашим магазинам</h1>
            <p>C Mpassistant вы сможете:</p>
            <div className='div7'>
              <span><svg style={{ width: "20px", color: "blue" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              </span>
              <p>Сможете видеть прибыль по всем магазинам и маркетплейсам в одном месте</p>
            </div>
            <div className='div7'>
              <span><svg style={{ width: "20px", color: "blue" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              </span>
              <p>Не потратите время на сбор данных из нескольких кабинетов или маркетплейсов</p>
            </div>
            <div className='div7'>
              <span><svg style={{ width: "20px", color: "blue" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              </span>
              <p>Добавите любое количество магазинов</p>
            </div>
          </div>
          <div>
            <img className='img4' src={frame32} alt="" />
            <img className='img5' src={frame63} alt="" />
          </div>
        </section>

        <section className='section6'>
          <h1>Почему выбирают Mpassistant</h1>
          <div className='contaner'>
            <div className='divgrid'>
              <div className='div8'>
                <img src={frame69} alt="" />
                <h2>Точность данных</h2>
              </div>
              <p>Данные в отчётах сервиса полностью совпадает с данными ваших магазинов на маркетплейсах.</p>
            </div>
            <div className='divgrid'>
              <div className='div8'>
                <img src={frame69} alt="" />
                <h2>Большой функционал</h2>
              </div>
              <p>Полный набор инструментов для внутренней аналитики для Wildberries и Ozon. Более 10 полезных отчётов с удобными настраиваемыми фильтрами и параметрами.</p>
            </div>
            <div className='divgrid'>
              <div className='div8'>
                <img src={frame69} alt="" />
                <h2>Лёгкость освоения</h2>
              </div>
              <p>Наши отчёты просты и удобны. Все отчёты имеют подробные инструкции и видео, помогающие легко читать их и использовать.</p>
            </div>
            <div className='divgrid'>
              <div className='div8'>
                <img src={frame69} alt="" />
                <h2>Подходит всем</h2>
              </div>
              <p>Mpassistant создан селлерами для селлеров. Наш опыт в товарном бизнесе и разработке IT систем позволил создать полезный и удобный продукт, поэтому он подойдёт как для новичков, так и для опытных селлеров.</p>
            </div>
            <div className='divgrid'>
              <div className='div8'>
                <img src={frame69} alt="" />
                <h2>Конфиденциальность</h2>
              </div>
              <p>Ваша конфиденциальность для нас самый главный приоритет. Все ваши данные надёжно сохранены, а информация об этом записана в договоре-оферте. По желанию можем заключить дополнительное соглашение (NDA).</p>
            </div>
            <div className='divgrid'>
              <div className='div8'>
                <img src={frame69} alt="" />
                <h2>Служба заботы</h2>
              </div>
              <p>Наша служба заботы готова решить практически любые вопросы и в режиме 24/7.</p>
            </div>
          </div>
        </section>

        <section className='section4'>
          <div className='div5'>
            <h1 style={{ fontSize: "30px" }}>Попробуйте бесплатно</h1>
            <p>3-дневный пробный период с неограниченным доступом ко всем возможностям</p>
            <div className='div4'>
              <input type="text" placeholder='Введите ваш email' />
              <button>Попробовать</button>
            </div>
          </div>
          <div>
            <img className='imgposition' src={remove1} alt="" />
          </div>
        </section>

        <section className='section7'>
          <h1>Выберите тариф</h1>
          <div className='divbtn'>
            <button className='btn1mec' >1 месяц</button>
            <button className='btn3612'>3 месяца</button>
            <button className='btn3612'>6 месяца</button>
            <button className='btn3612'>12 месяца</button>
          </div>
          <div className='grid'>
            <div className='div9'>
              <h2>Стартовый</h2>
              <h3 style={{color:"blue"}}>4 990 ₽</h3>
              <div className='divbutton1'>
                <button className='btnpop'>Попробовать</button>
                <button className='btnpod'>Подробнее</button>
              </div>
            </div>
            <div className='div9' style={{background:"#E9F3FE"}}>
              <h2>Стартовый +</h2>
              <div>
              <p style={{fontSize:"15px" ,color:"gray"}}>4 491 ₽/мес</p>
              <h3 style={{color:"blue"}}>13 473 ₽</h3>
              </div>
              <div className='divbutton'>
                <button className='btnpop'>Попробовать</button>
                <button className='btnpod'>Подробнее</button>
              </div>
            </div>
            <div className='div9' style={{background:"#E8F7F4"}}>
              <h2>Профи </h2>
              <div>
              <p style={{fontSize:"15px" ,color:"gray"}}>4 241 ₽/мес</p>
              <h3 style={{color:"blue"}}>25 446 ₽</h3>
              </div>
              <div className='divbutton'>
                <button className='btnpop'>Попробовать</button>
                <button className='btnpod'>Подробнее</button>
              </div>
            </div>
          </div>
        </section>

        <section className='section4' style={{background:"#FFEDD0"}}>
          <div className='div5'>
            <h1 style={{ fontSize: "30px" }}>Начинающим селлерам с выручкой</h1>
            <p style={{color:"blue"}}>Бесплатно</p>
            <div className='divbutton'>
                <button className='btnpop' style={{padding:"10px 0px",width:"60%"}}>Попробовать</button>
                <button className='btnpod' style={{padding:"10px 0px",width:"60%"}}>Подробнее</button>
              </div>
          </div>
          <div>
            <img className='imgposition1' src={remov2} alt="" />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
