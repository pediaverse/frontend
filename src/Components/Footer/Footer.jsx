import './Footer.css'


export default function Footer(){
    return (
        <div className='footer'>

        <div id="container" className="common">
            <ul className="links-list">
                    <li className="links-list-title">Company</li>
                    <li className="links-list-items"><a href="/">About us</a></li>
                    <li className="links-list-items"><a href="/">Press</a></li>
                    <li className="links-list-items"><a href="/">Careers</a></li>
                    <li className="links-list-items"><a href="/">Engineering</a></li>
                    <li className="links-list-items"><a href="/">Accessibility</a></li>
            </ul>
            <ul className="links-list">
                    <li className="links-list-title">Resources</li>
                    <li className="links-list-items"><a href="/">Big Ideas</a></li>
                    <li className="links-list-items"><a href="/">Points</a></li>
                    <li className="links-list-items"><a href="/">Resources</a></li>
                    <li className="links-list-items"><a href="/">Training</a></li>
                    <li className="links-list-items"><a href="/">Remote Learning</a></li>
            </ul>
            <ul className="links-list">
                    <li className="links-list-title">Support</li>
                    <li className="links-list-items"><a href="/">Helpdesk</a></li>
                    <li className="links-list-items"><a href="/">Contact</a></li>
                    <li className="links-list-items"><a href="/">Cookies Setting</a></li>
                    <li className="links-list-items"><a href="/">Privacy Center</a></li>
            </ul>
            <ul className="links-list">
                    <li className="links-list-title">Community</li>
                    <li className="links-list-items"><a href="/">Teacher Community</a></li>
                    <li className="links-list-items"><a href="/">Facebook</a></li>
                    <li className="links-list-items"><a href="/">Twitter</a></li>
                    <li className="links-list-items"><a href="/">Instagram</a></li>
            </ul>
        </div>
        <div className='footer-navigation'>
            <div className='footer-nav-list'>
                <div className='footer-nav-list-item'><a href='/'>&copy;Pediaverse </a></div>
                <div className='footer-nav-list-item'><a href="/">Terms of Service</a></div>
                <div className='footer-nav-list-item'><a href="/">Product Privacy Policy</a></div>
                <div className='footer-nav-list-item'><a href="/">Website Privacy Policy</a></div>
            </div>
        </div>
        </div>
    );
}