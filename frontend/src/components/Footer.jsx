
import '../styles/Footer.css'

const footerLinks = ['Help', 'Status', 'Writers', 'Blog', 'Careers', 'Privacy', 'Terms', 'About', 'Text to speech', 'Teams']

const Footer = () => {
  return (
    <div className="footer">
      {footerLinks.map((link) => {
        return (
          <a href="google.com">
            {link}
          </a>
        )
      })}
    </div>
  );
}

export default Footer;