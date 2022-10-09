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
                <h3> &#129335;Ups!!... Parece que encontraste un error en la matrix</h3>
                <Link to="/home">← Volver al inicio &#128519;</Link>
            </div>
    )
}
export default NotFoundPage

