import Header from'./Header.jsx'
import Footer from'./Footer.jsx'
import Food from'./Food.jsx'
import react from'./assets/react.svg'
import Card from'./Card.jsx' 
// import Button from './Button/Button.jsx' 
import Button from './Button.jsx' 
// import Student from "./Student.jsx"
 

function App() {
  

  return (
    <>
    <Header/>
    <Food/>
    <img src={react} alt="" />
    <Footer/>
    <Card/> <br />
    <Button/>
    {/* <Student name="spongebob" age={30}/> */}
    </>
  )
}

export default App
