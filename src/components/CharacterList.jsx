import { useEffect, useState } from 'react'
import { Character } from './Character'

export const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const data = await response.json()
      setCharacters(data.results)
    }
    fetchData()
  }, [])

  return (
    <div>
      {characters.map(character => {
        return <Character key={character.id} character={character} />
      })}
    </div>
  )
}
