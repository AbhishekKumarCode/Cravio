function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          CRAIVO <span>© 2026</span>
        </div>
        <div className="footer-center">
          WEB DESIGN &amp; DEVELOPMENT AGENCY — PROUDLY BUILT IN DELHI, INDIA
        </div>
        <div className="footer-right">
          <a href="https://www.upwork.com/freelancers/~0118882544be59d04b?mp_source=share" className="footer-social-link" target="_blank" rel="noopener noreferrer">Upwork</a>
          <a href="https://www.linkedin.com/in/abhishek8668" className="footer-social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/AbhishekKumarCode" className="footer-social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <div className="container footer-legal-links">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
      </div>
    </footer>
  )
}

export default SiteFooter
