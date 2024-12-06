import mascot from '../assets/Stoffel-LOGO.png'

function Header() {
  return (
    <header className="App-header">
      <img src={mascot} className="App-logo" alt="StoffelMPC Mascot" />
      <h1>Welcome to StoffelMPC</h1>
      <h2>Secure Multiparty Computation Made Simple</h2>
    </header>
  );
}

export default Header;
