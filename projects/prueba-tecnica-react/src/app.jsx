import { useEffect, useState } from 'react'
const catFact = 'https://catfact.ninja/fact'
export function App () {
  const [fact, setFact] = useState()

  useEffect(() => {
    fetch(catFact).then((res) => res.json().then((data) => setFact(data.fact)))
  }, [])

  return (
    <main>
      <h1>App de gatos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
