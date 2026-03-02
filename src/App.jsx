import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Kaktusai from './pages/kaktusai/Kaktusai'
import Kultur from './pages/kultur/Kultur'
import Main from './pages/main/Main'
import Referans from './pages/refesans/Referans'
import Surec from './pages/surec/Surec'
import Uzmanlık from './pages/uzmanlık/Uzmanlık'
import Yorumlar from './pages/yorumlar/Yorumlar'
import News from './pages/news/News'

function App() {

  return (
    <div>
     <Header/>
     <Main/>
     <Uzmanlık/>
     <Surec/>
     <Referans/>
     <Yorumlar/>
     <Kaktusai/>
     <Kultur/>
     <News/>
     <Footer/>
    </div>
  )
}

export default App
