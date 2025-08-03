import axios from "axios"
import { useState } from "react"

function App() {
  const [name, setName] = useState("")
  const [cookie, setCookie] = useState([])

 
  useState(()=>{
    axios.get('/api/data')
  .then((response)=>{
    setName(response.data)
  })
  .catch((error)=>{
    console.log('error fetching data',error)
  })
  },[])

  useState(()=>{
    axios.get("/api/read")
    .then((response)=>{
      setCookie(response.data.cookie)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <>
      <h1>Hello my name is {JSON.stringify(name.name)}</h1>
      <h1>This is store cookie data {JSON.stringify(cookie)}</h1>
    </>
  )
}

export default App
