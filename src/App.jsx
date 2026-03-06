import logo from './assets/7 (2).svg'
import logo1 from './assets/7 (3).svg'
import text from './assets/Аналитика и оцифровка продаж Wildberries и Ozon.png'
import group3 from './assets/Group 3 (2).png'
import fram12 from './assets/Frame 12.png'
import fram13 from './assets/{7D728322-0C26-461B-9F3F-32F3EF30E592}.png'
import remove from './assets/[removal 1 (2).png'
import "./style/App.css"

const App = () => {
  return (
    <div>
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
                <input type="text" placeholder='Введите ваш email'/>
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
            <h1 style={{color:"blue"}}>777</h1>
            <p>Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и анализе отчётов</p>
          </div>
          <div className='div777'>
            <h1 style={{color:"blue"}}>5</h1>
            <p>Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и анализе отчётов</p>
          </div>
          <div className='div777'>
            <h1 style={{color:"blue"}}>100 000</h1>
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
            <h1 style={{fontSize:"30px"}}>Начните экономить своё время</h1>
            <p>3-дневный пробный период с неограниченным доступом ко всем возможностям</p>
            <div className='div4'>
              <input type="text" placeholder='Введите ваш email'/>
              <button>Попробовать</button>
            </div>
          </div>
          <div>
            <img className='imgposition' src={remove} alt="" />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
