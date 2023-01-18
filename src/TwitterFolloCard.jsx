import { useState } from 'react'

export function TwitterFollowCard({ userName, name, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt={`${name} Avatar`}
          src={`https://unavatar.io/${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span
            className='tw-followCard-infoUserName'>{userName}</span>
        </div>
      </header>

      <aside>
        <button
          className={
            isFollowing
              ? 'tw-followCard-button is-following'
              : 'tw-followCard-button'}
          onClick={() => {
            setIsFollowing(!isFollowing)
          }}>
          <span className='tw-followCard-text'>
            {isFollowing ? ' Siguiendo' : 'Seguir'}
          </span>
          <span className='tw-followCard-stopFollow '>Dejar de seguir</span>
        </button>
      </aside>
    </article >
  )
}