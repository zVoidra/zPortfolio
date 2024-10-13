import './App.css'
import ContentArea from './Components/ContentArea/ContentArea'
import NavigationMenu from './Components/NavigationMenu/NavigationMenu'

function App() {
  return (
    <div className='App'>
      <div className='AppContainer'>
        <NavigationMenu/>
        <ContentArea/>
      </div>
    </div>
  )
}

export default App
