import React from 'react'

const _HomePage: React.FC = () => {
  return (
    <div>
      Home
    </div>
  )
}
const HomePage = React.memo(_HomePage)
export default HomePage
