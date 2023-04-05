import React, {useState, useEffect} from "react"
import { Link, useParams } from "react-router-dom"



export default function SingleDog() {
  const [dog, setDog] = useState([])
  const { index }  = useParams()
  
  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch("https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126")
        const data = await res.json()
        setDog(data.record)
        console.log(data.record)
      } catch (error) {
        console.error(error)
      }
      
    }
    //console.log(name)
    fetchSingleDogData()
  }, [])

  if(dog.length >0) {

    return (
      <div>
        <h2>{dog[index].name}</h2>
        <img src={dog[index].img} />
      </div>
  
    ) 
  }


  return (
    <div>
      <h2>Loading...</h2>
      
    </div>

  ) 
}

