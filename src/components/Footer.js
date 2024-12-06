function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="App-header">
      <section className="description">
        <div className="social-links" style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          margin: '1rem 0'
        }}>
          <a href="https://github.com/Stoffel-Labs" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{
               textDecoration: 'none',
               color: '#61dafb',
               fontSize: '1.1rem'
             }}>GitHub</a>
          <a href="https://x.com/StoffelMPC" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{
               textDecoration: 'none',
               color: '#61dafb', 
               fontSize: '1.1rem'
             }}>Twitter</a>
          <a href="https://discord.gg/2vU5WruT6R" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{
               textDecoration: 'none',
               color: '#61dafb',
               fontSize: '1.1rem'
             }}>Discord</a>
          <a href="https://t.me/+7L0HPi1U8pU1MzQx" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{
               textDecoration: 'none',
               color: '#61dafb',
               fontSize: '1.1rem'
             }}>Telegram</a>
        </div>
        <p className="copyright">© {currentYear} Stoffel Labs Inc. All rights reserved.</p>
      </section>
    </footer>
  );
}

export default Footer;
