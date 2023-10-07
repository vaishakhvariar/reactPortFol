import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est ultricies. 
                Massa ultricies mi quis hendrerit. Nullam non nisi est sit amet facilisis. </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est ultricies. 
                Massa ultricies mi quis hendrerit. Nullam non nisi est sit amet facilisis.                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est ultricies. 
                Massa ultricies mi quis hendrerit. Nullam non nisi est sit amet facilisis.                </p>


            </div>

        </div>)
}

export default About