// // Write your code here.

import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProgress} = props

  return (
    <nav className="navbar-container">
      <div className="navbar-sub-container">
        <div className="logo-title-container">
          <img
            className="emoji-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar

// import {Component} from 'react'
// import './index.css'

// class NavBar extends Component {
//   render() {
//     const {score, top} = this.props
//     const gameScore = score

//     return (
//       <nav className="navbar-container">
//         <div className="nav-img-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
//             alt="emoji logo"
//             className="logo"
//           />
//           <h1 className="heading">Emoji Game</h1>
//         </div>
//         {gameScore !== 12 ? (
//           <div className="score-container">
//             <p className="score">`Score: ${gameScore}`</p>
//             <p className="score">`Top Score: ${top}`</p>
//           </div>
//         ) : (
//           ''
//         )}
//       </nav>
//     )
//   }
// }

// export default NavBar