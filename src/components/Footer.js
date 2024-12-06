function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="App-header">
      <section className="description">
        <div className="social-links">
          <a href="https://github.com/Stoffel-Labs" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://x.com/StoffelMPC" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://discord.gg/2vU5WruT6R" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://t.me/+7L0HPi1U8pU1MzQx" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
        <p className="copyright">© {currentYear} Stoffel Labs Inc. All rights reserved.</p>
      </section>
    </footer>
  );
}

export default Footer;
