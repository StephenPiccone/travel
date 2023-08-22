import './App.css'
import Card from './components/card'
import Header from './components/header'
import data from './data.js'

function App() {
  const cardElements = data.map(card => {
    return <Card 
    key={card.id}
    {...card}
    />
})

  return (
    <>
     <div>
        <Header />
        <section>{cardElements}</section>
     </div>
    </>
  )
}

export default App
