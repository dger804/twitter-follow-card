import './App.css'
import { TwitterFollowCard } from './TwitterFolloCard'

const users = [
  {
    "userName": "diego804@gmail.com",
    "name": "Diego Gutiérrez",
    "initialIsFollowing": true,
  },
  {
    "userName": "margaritarosamolinagmail.com",
    "name": "Margui Molina",
    "initialIsFollowing": false
  },
  {
    "userName": "julian.reyes.escrigas@gmail.com",
    "name": "Julian Reyes",
    "initialIsFollowing": true
  },
  {
    "userName": "jreyes@bixlabs.com",
    "name": "Julian 2",
    "initialIsFollowing": false
  },
]

export function App() {

  return (
    <section className="App">
      {
        users.map(({ userName, name, initialIsFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
            initialIsFollowing={initialIsFollowing} />
        ))
      }
    </section>
  )
}