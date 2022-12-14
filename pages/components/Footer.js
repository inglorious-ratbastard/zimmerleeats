export default function Footer () {
  return <footer className="footer bg-black">
    <h6 className="footer__title text-white uppercase">Zimmerle Eats</h6>
    <div className="content bg-black">
        <div className="divider"></div>

        <div className="row">
            <div className="col-4">
                <ul className="no-bullets">
                    <a href="!#">
                        <li className="footer__list-item">Home</li>
                    </a>
                    <a href="!#">
                        <li className="footer__list-item">Sign Up</li>
                    </a>
                    <a href="!#">
                        <li className="footer__list-item">Downloads</li>
                    </a>
                    <ul>
                    </ul>
                </ul>
            </div>
            <div className="col-4">
                <ul className="no-bullets">
                    <a href="!#">
                        <li className="footer__list-item">Company Information</li>
                    </a>
                    <a href="!#">
                        <li className="footer__list-item">Contact Us</li>
                    </a>
                    <a href="!#">
                        <li className="footer__list-item">Reviews</li>
                    </a>
                    <ul>
                    </ul>
                </ul>
            </div>
            <div className="col-4">
                <ul className="no-bullets">
                    <a href="!#">
                        <li className="footer__list-item">FAQ</li>
                    </a>
                    <a href="!#">
                        <li className="footer__list-item">Help Desk</li>
                    </a>
                    <a href="!#">
                        <li className="footer__list-item">Forums</li>
                    </a>
                    <ul>
                    </ul>
                </ul>
            </div>
        </div>
    </div>
    <p className="subtitle bg-black">Zimmerle Eats © 2023.</p>
</footer>
}