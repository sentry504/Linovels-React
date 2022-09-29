import '../css/NotFoundPage.css'
import {Link} from 'react-router-dom'

function NotFoundPage() {
    return (
        <>
            <div className="container col-xs-1 center-block">
                <h1>404</h1>
                <br/>
                <h3>It looks like you found a glitch in the matrix...</h3>
                <Link to="/home">← Back to Dashboard</Link>
            </div>
        </>
    )
}
export default NotFoundPage

