export default function FooterPage() {
    return (
        <footer className="page-footer fixed-botton font-small blue pt-4">
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
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2022 copyright: 
                <a className="copyright" onClick={document.open('https://gist.github.com/sentry504','_blank')}>  Linovels  </a>
            </div>

        </footer>
    )
}