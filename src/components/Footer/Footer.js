import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return ( 
        <footer>
            <div className="footer__container">
                <div className="footer__social__links">
                    <FacebookIcon className="social__link" />
                    <TwitterIcon className="social__link" />
                    <InstagramIcon className="social__link" />
                    <YouTubeIcon className="social__link" />
                </div>
                <div className="footer__links">
                    <ul className="footer__links__list">
                        <li><a href="/">Site terms and policies</a></li>
                        <li><a href="/">Community standards</a></li>
                        <li><a href="/">Privacy policy</a></li>
                        <li><a href="/">Terms</a></li>
                        <li><a href="/">Cookie policy</a></li>
                        <li><a href="/">Virtual reality</a></li>
                        {/* Add more links as needed */}
                    </ul>
                </div>
                <div className="footer__links">
                    <ul className="footer__links__list">
                        <li><a href="/">Shop Meta Quest</a></li>
                        <li><a href="/">Refurbished Meta Quest 2</a></li>
                        <li><a href="/">Meta Warranty Plus</a></li>
                        <li><a href="/">VR for Good</a></li>
                        <li><a href="/">Forums</a></li>
                        <li><a href="/">Referrals</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Creators</a></li>
                        {/* Add more links as needed */}
                    </ul>
                </div>
                <div className="footer__links">
                    <ul className="footer__links__list">
                        <li><a href="/">Download SDKs</a></li>
                        <li><a href="/">Developers</a></li>
                        <li><a href="/">Made for Meta partner program</a></li>
                        <li><a href="/">Safety information for parents & pre-teens</a></li>
                        <li><a href="/">Meta Quest health & safety information</a></li>
                        <li><a href="/">Meta Quest safety center</a></li>
                        <li><a href="/">Meta for Work</a></li>
                        <li><a href="/">Meta Avatars</a></li>
                        <li><a href="/">Smart glasses</a></li>
                        <li><a href="/">Shop Ray-Ban Meta smart glasses</a></li>
                        <li><a href="/">Ray-Ban Stories</a></li>
                        <li><a href="/">Privacy information</a></li>
                        <li><a href="/">Supported countries</a></li>
                        {/* Add more links as needed */}
                    </ul>
                </div>
                <div className="footer__links">
                    <ul className="footer__links__list">
                        <li><a href="/">Support and legal</a></li>
                        <li><a href="/">Meta Help Center</a></li>
                        <li><a href="/">Order status</a></li>
                        <li><a href="/">Returns</a></li>
                        <li><a href="/">Find a product demo</a></li>
                        <li><a href="/">Legal</a></li>
                        <li><a href="/">Terms of sale</a></li>
                        <li><a href="/">Our actions</a></li>
                        <li><a href="/">Data and privacy</a></li>
                        <li><a href="/">Safety and expression</a></li>
                        <li><a href="/">Responsible business practices</a></li>
                        <li><a href="/">Elections</a></li>
                        <li><a href="/">COVID-19 response</a></li>
                        <li><a href="/">Regulations</a></li>
                        {/* Add more links as needed */}
                    </ul>
                </div>
                <div className="footer__links">
                    <ul className="footer__links__list">
                        <li><a href="/">About us</a></li>
                        <li><a href="/">About Meta</a></li>
                        <li><a href="/">Media gallery</a></li>
                        <li><a href="/">Brand resources</a></li>
                        <li><a href="/">For investors</a></li>
                        <li><a href="/">Our community</a></li>
                        <li><a href="/">Support SMB</a></li>
                        <li><a href="/">Giving together</a></li>
                        <li><a href="/">Social impact</a></li>
                        <li><a href="/">App support</a></li>
                        <li><a href="/">Facebook Help Center</a></li>
                        <li><a href="/">Messenger Help Center</a></li>
                        <li><a href="/">Instagram Help Center</a></li>
                        <li><a href="/">WhatsApp Help Center</a></li>
                        <li><a href="/">Workplace Help Center</a></li>
                        <li><a href="/">Meta Verified</a></li>
                        {/* Add more links as needed */}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
