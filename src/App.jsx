import { useCallback, useState } from 'react'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider'
import Pages from './Pages/Pages'
import Blog from './Pages/Blog'
import Boxes1 from './Components/Boxes1'
import About from './Components/About'
import Comp1 from './Components/Comp1'
import Comp2 from './Components/Comp2'
import Comp3 from './Components/Comp3'

function App() {
  const[count,setCount]=useState(0);
  const[count1,setCount1]=useState(0);
  const[name,setName]=useState("Harshitha");

  const handleCount= useCallback(()=>{
    setCount(count+1)
  },[count])
  const handleCount1=useCallback(()=>{
    setCount1(count + 1)
  },[count1])
  
  return(
    <>
  <Comp1 count={count} handleCount={handleCount}/>
  <Comp2 count1={count1} handleCount1={handleCount1}/>
  <Comp3 name={name}/>
  </>
  )
}
export default App


