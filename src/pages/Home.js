import Header from '../components/Header';

function Home() {
  return (
    <div className="home">
      <Header />
      <main className="App-header">
        <section className="description">
          <h2>What is StoffelMPC?</h2>
          <p>
            StoffelMPC is a framework that enables developers to integrate secure multiparty computation 
            into their applications without requiring deep cryptographic expertise.
          </p>
          
          <h3>Our Framework Features:</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem 0' }}>
            <div style={{
              padding: '1rem',
              backgroundColor: '#3a404b',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}>
              A specialized programming language for multiparty computation
            </div>
            <div style={{
              padding: '1rem', 
              backgroundColor: '#3a404b',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}>
              A compiler that processes MPC programs
            </div>
            <div style={{
              padding: '1rem',
              backgroundColor: '#3a404b', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}>
              A virtual machine for secure execution
            </div>
          </div>

          <h3>Academic Foundation</h3>
          <p>
            StoffelMPC is based on Ratel
          </p>
          <a 
            href="https://eprint.iacr.org/2023/1909.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link"
          >
            Read the paper
          </a>
        </section>
      </main>
    </div>
  );
}

export default Home;
