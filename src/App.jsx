import React from 'react'
import Card from './companent/card'
import Button from './companent/Button'
import user from './assets/image.png'

const App = () => {
  return (
    <div>
      <Card img={user} name="My card" about="I am Abdulloh i am learning react" color={"red"}>
      <Button />
      </Card>
    </div>
  )
}

export default App
