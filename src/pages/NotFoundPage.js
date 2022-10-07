import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div className="container text-center position-absolute top-50 start-50 translate-middle" style={{width:"min-content"}}>
                <lottie-player
                    src="https://assets7.lottiefiles.com/packages/lf20_2QSlz3Li88.json"
                    mode="bounce"
                    background="transparent"
                    speed="1"
                    style={{width:"600px",height:"600px"}}
                    loop
                    autoplay>
                </lottie-player>
                <h3>It looks like you found a glitch in the matrix...</h3>
                <Link to="/home">← Back to Dashboard</Link>
            </div>
    )
}
export default NotFoundPage

