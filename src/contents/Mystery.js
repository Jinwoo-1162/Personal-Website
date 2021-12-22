import React, {useState, useEffect} from 'react'
import '../CSS/Mystery.css'

function Mystery(props) {
    let [value, setValue] = useState('Enter Pin')
    let [displaySecret, setDisplaySecret] = useState(false)

    useEffect(() => {
        sessionStorage.setItem('pin', Math.trunc(100000 * Math.random()))
    },[])

    function input(num) {
        setDisplaySecret(false)
        let val = value;
        if (value === 'Enter Pin' || value === 'Incorrect Pin' || value === 'Success') {
            val = ''
        }
        if (num >= 0) {
            val = val.concat(num)
        } else if (num === -1) {
            val = val.substring(0, val.length - 1)
            if (val === '') {
                val = 'Enter Pin'
            }
        } else if (num === -2) {
            val = (val === sessionStorage.getItem('pin').toString())? 'Success' : 'Incorrect Pin'
            if (val === 'Success') {
                setDisplaySecret(true)
            }
        }
        setValue(val)
    }

    return (
        <div className='condiv'>
            <h1>???</h1>
            <div className='holder-holder'>
                <div className='game-holder'>
                    <h3 className='pin-value'>{value}</h3>
                    <div className='numpad'>
                        <button className='number' onClick={() => input(1)}>1</button>
                        <button className='number' onClick={() => input(2)}>2</button>
                        <button className='number' onClick={() => input(3)}>3</button>
                        <button className='number' onClick={() => input(4)}>4</button>
                        <button className='number' onClick={() => input(5)}>5</button>
                        <button className='number' onClick={() => input(6)}>6</button>
                        <button className='number' onClick={() => input(7)}>7</button>
                        <button className='number' onClick={() => input(8)}>8</button>
                        <button className='number' onClick={() => input(9)}>9</button>
                        <button className='number' onClick={() => input(-1)}>Del</button>
                        <button className='number' onClick={() => input(0)}>0</button>
                        <button className='number' onClick={() => input(-2)}>Enter</button>
                    </div>
                    <div className="secret" style={displaySecret? {display: ''}:{display: 'none'}}>
                        <label className='art-label'>
                            Secret Art Porfolio
                        </label>
                        <a className="album-link" href="https://imgur.com/a/ojFzh8j" target="-blank">Album Link</a></div>
                </div>
            </div>
        </div>
    )
}

export default Mystery