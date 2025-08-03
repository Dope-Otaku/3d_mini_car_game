import axios from "axios"
import { useState } from "react"

function App() {
  const [name, setName] = useState("")

 
  axios.get('/api/data')
  .then((response)=>{
    setName(response.data)
  })
  .catch((error)=>{
    console.log('error fetching data',error)
  })

  return (
    <>
      <h1>`Hello my name is ${JSON.stringify(name)}`</h1>
    </>
  )
}

export default App
