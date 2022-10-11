import {useParams} from 'react-router-dom'
function Lector() {
    const { id, doc } = useParams()
    return(
        <div style={{height:"100vh"}}>
            <iframe src={`${doc}#toolbar=1`} width="100%" height="100%" title={id.toString()}></iframe>
        </div>
    )
}
export default Lector