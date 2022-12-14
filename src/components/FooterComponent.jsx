import {FcCopyright} from 'react-icons/fc'
import {FaGithubAlt} from 'react-icons/fa'
export default function FooterPage() {
    return (
        <footer className="page-footer fixed-botton text-wrap font-small blue pt-4" >
            <div className="footer-copyright text-center py-3">
                <FcCopyright size="30px"></FcCopyright>
                <strong>opyright</strong> 2022 <br/>
                <FaGithubAlt/><a className="footer" href='https://gist.github.com/sentry504'> Linovels </a>
            </div>
        </footer>
    )
}
/* 
<div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-8 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Linovels</h5>
                        <p>Proyecto desarrollado para brindar un punto de encuentro entre la comunidad amante del anime, manga, novelas, cuentos japoneses</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a className="footer" href="#!">About</a></li>
                            <li><a className="footer" href="#!">Contact</a></li>
                            <li><a className="footer" href="#!">Privacity</a></li>
                        </ul>
                    </div>
                </div>
            </div>

*/