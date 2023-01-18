import './App.css'
import { TwitterFollowCard } from './TwitterFolloCard'
import { USERS } from './constants'

export function App() {

  return (
    <section className="App">
      {
        USERS.map(({ userName, name, initialIsFollowing }) => (
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