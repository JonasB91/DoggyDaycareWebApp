import React, {useState, useEffect} from "react"
import { Link, useParams } from "react-router-dom"



export default function SingleDog() {
  const [dog, setDog] = useState([])
  const {name}  = useParams()
  
  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126?q=${name}`)
        const data = await res.json()
        setDog(data.record)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
    console.log(name)
    fetchSingleDogData()
  }, [name])

  return (
    <>
      <section>
      {dog.map((item, index) => (
        <div key={item.index}>
          <article>
          <img src={item.img} alt={item.name} />
          </article>
          

        </div>
        ))}
      </section>
    </>


  ) 
}

