import LogoTitle from '../../assets/images/logo-v1.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect } from 'react'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'i', 's', 'h', 'a', 'k', 'h']
    const jobArray = ['W','e','b',' ','D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(()=> {
        return () => setTimeout(()=> {
            setLetterClass('text-animate-hover')
        }, 4000)    
    }, [])
    
    return (
        <div className = "container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="Logo Title" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2> Front-End Developer | Javascript | React</h2>
                <Link to="/contact" className='flat-button'> Contact Me</Link>
            </div>
            </div>

    )
}

export default Home;