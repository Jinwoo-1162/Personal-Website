import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import '../CSS/TicTacToe.css'

function TicTacToe(props) {
    let [started, setStarted] = useState(false)
    let [turnText, setTurnText] = useState('')
    let turn = useRef('X')
    let gameState = useRef('---------')
    let [yourTurn, setYourTurn] = useState()
    let [gameOver, setGameOver] = useState(false)

    function computerTurn() {
        // computer's turn
        if (!gameState.current.includes('-')) {
            setTurnText('Draw!')
            return
        } else {
            var options = {
                method: 'GET',
                url: `https://stujo-tic-tac-toe-stujo-v1.p.rapidapi.com/${gameState.current}/${turn.current}`,
                headers: {
                    'x-rapidapi-host': 'stujo-tic-tac-toe-stujo-v1.p.rapidapi.com',
                    'x-rapidapi-key': '1225ff6c1dmsh23adefec29b568cp1a760djsnec74fb9c5271'
                }
            }
                
            axios.request(options).then(function (response) {
                console.log(response.data)
                let strPos = response.data.recommendation;
                gameState.current = gameState.current.substring(0,strPos) + 'X' + gameState.current.substring(strPos + 1)
    
                turn.current = 'O'
                let button = document.getElementById(strPos + 1)
                button.innerText = 'X'
                if (response.data.strength >= 6000) {
                    setTurnText('I Win!')
                    setGameOver(true)
                    return
                } else if (!gameState.current.includes('-')) {
                    setTurnText('Draw!')
                    setGameOver(true)
                    return
                }
    
                console.log(gameState.current)
    
                setTurnText('Your Turn')
                setYourTurn(true)
            }).catch(function (error) {
                console.error(error)
            })
        }
    }

    function takeTurn(currTurn, pos) {
        // my turn
        if (!gameState.current.includes('-')) {
            setTurnText('Draw!')
            setGameOver(true)
            return
        } else if (currTurn && gameState.current.charAt(pos) == '-') {
            gameState.current = gameState.current.substring(0,pos) + 'O' + gameState.current.substring(pos + 1)
            turn.current = 'X'
            let button = document.getElementById(pos + 1)
            button.innerText = 'O'

            if (!gameState.current.includes('-')) {
                setTurnText('Draw!')
                setGameOver(true)
                return
            }

            console.log(gameState.current)

            setTurnText('My Turn')
            setYourTurn(false)
            const computerTurnTimeout = setTimeout(computerTurn, 3000)
            // clearTimeout(computerTurnTimeout)
        } else if (gameState.current.charAt(pos) != '-') {
            setTurnText('Pick a Different Spot')
            const wrongSpotTimeout = setTimeout(() => {
                setTurnText('Your Turn')
            }, 3000)
            // clearTimeout(wrongSpotTimeout)
        }
    }

    useEffect(() => {
        if (started) {
            setGameOver(false)
            if (Math.random() <= 0.5) {
                turn.current = 'O'
                setTurnText('Your Turn')
                gameState.current = '---------'
                setYourTurn(true)
            } else {
                turn.current = 'X'
                setTurnText('My Turn')
                gameState.current = '---------'
                setYourTurn(false)
                const computerTurnTimeout = setTimeout(computerTurn, 3000)
                // clearTimeout(computerTurnTimeout)
            }
        }
        // eslint-disable-next-line
    }, [started])

    return (
        <div>
            {
                started?
                (
                    <div className='game-container'>
                        <h3 className='turn'>{turnText}<FontAwesomeIcon icon={faSpinner} style={!yourTurn && !gameOver? {display:""}:{display:"none"}} className="spinner"/></h3>
                        <div className='board'>
                            <button id='1' className="game-space" onClick={() => gameOver? () => {} : takeTurn(yourTurn, 0)}></button>
                            <button id='2' className="game-space" onClick={() => gameOver? () => {} : takeTurn(yourTurn, 1)}></button>
                            <button id='3' className="game-space" onClick={() => gameOver? () => {} : takeTurn(yourTurn, 2)}></button>
                            <button id='4' className="game-space" onClick={() => gameOver? () => {} : takeTurn(yourTurn, 3)}></button>
                            <button id='5' className="game-space" onClick={() => gameOver? () => {} : takeTurn(yourTurn, 4)}></button>
                            <button id='6' className="game-space" onClick={() => gameOver? () => {} : takeTurn(yourTurn, 5)}></button>
                            <button id='7' className="game-space" onClick={() => gameOver? () => {} : takeTurn(yourTurn, 6)}></button>
                            <button id='8' className="game-space" onClick={() => gameOver? () => {} : takeTurn(yourTurn, 7)}></button>
                            <button id='9' className="game-space" onClick={() => gameOver? () => {} : takeTurn(yourTurn, 8)}></button>
                        </div>
                        <button className="start-quit-button" onClick={() => setStarted(!started)}>Quit</button>
                    </div>
                )
                :
                (
                    <div>
                        <button className="start-quit-button start-button" onClick={() => setStarted(!started)}>Start Game</button>
                    </div>
                )
            }
        </div>
    )
}

export default TicTacToe