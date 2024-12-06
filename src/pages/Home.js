import Header from '../components/Header';

function Home() {
  return (
    <div className="home" style={{ backgroundColor: '#282c34' }}>
      <div className="section-wrapper">
        <Header />
      </div>
      <div className="section-wrapper">
        <main className="container" style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '2rem',  // Increased padding
        }}>
          <section className="description">
            <h2 style={{ 
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
              background: 'linear-gradient(90deg, #61dafb, #a8e6ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>What is StoffelMPC?</h2>
            <p style={{ 
              fontSize: '1.2rem',
              lineHeight: '1.6',
              marginBottom: '2.5rem',
              color: '#e6e6e6'
            }}>
              StoffelMPC is a framework that enables developers to integrate secure multiparty computation 
              into their applications without requiring deep cryptographic expertise.
            </p>
            
            <h3 style={{ 
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              color: '#61dafb'
            }}>Our Framework Features:</h3>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem',  // Increased gap
              margin: '1.5rem 0' 
            }}>
              <div style={{
                padding: '1.5rem',  // Increased padding
                backgroundColor: '#1a1b1e',
                borderRadius: '12px',  // Increased border radius
                boxShadow: '0 4px 6px rgba(0,0,0,0.3)',  // Enhanced shadow
                border: '1px solid #30363d',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                color: '#e6e6e6',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 8px rgba(0,0,0,0.4)'
                }
              }}>
                A specialized programming language for multiparty computation
              </div>
              <div style={{
                padding: '1.5rem',  // Increased padding
                backgroundColor: '#1a1b1e',
                borderRadius: '12px',  // Increased border radius
                boxShadow: '0 4px 6px rgba(0,0,0,0.3)',  // Enhanced shadow
                border: '1px solid #30363d',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                color: '#e6e6e6',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 8px rgba(0,0,0,0.4)'
                }
              }}>
                A compiler that processes MPC programs
              </div>
              <div style={{
                padding: '1.5rem',  // Increased padding
                backgroundColor: '#1a1b1e',
                borderRadius: '12px',  // Increased border radius
                boxShadow: '0 4px 6px rgba(0,0,0,0.3)',  // Enhanced shadow
                border: '1px solid #30363d',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                color: '#e6e6e6',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 8px rgba(0,0,0,0.4)'
                }
              }}>
                A virtual machine for secure execution
              </div>
            </div>

            <h3 style={{ 
              fontSize: '1.8rem',
              marginTop: '3rem',
              marginBottom: '1rem',
              color: '#61dafb'
            }}>Academic Foundation</h3>
            <p style={{ 
              fontSize: '1.2rem',
              lineHeight: '1.6',
              marginBottom: '1rem',
              color: '#e6e6e6'
            }}>
              StoffelMPC is based on Ratel
            </p>
            <a 
              href="https://eprint.iacr.org/2023/1909.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                color: '#61dafb', 
                textDecoration: 'none',
                fontSize: '1.1rem',
                borderBottom: '2px solid #61dafb',
                paddingBottom: '2px',
                transition: 'opacity 0.2s',
                ':hover': {
                  opacity: 0.8
                }
              }}
            >
              Read the paper
            </a>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
