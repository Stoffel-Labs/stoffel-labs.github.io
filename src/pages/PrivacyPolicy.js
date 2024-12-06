  function PrivacyPolicy() {
    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    return (
      <main className="App-header">
        <section className="privacy-policy">
          <h1>Privacy Policy</h1>
          <p>Last updated: {month} {year}</p>

          <h2>Introduction</h2>
          <p>Stoffel Labs Inc. ("we", "us", or "our") is committed to transparency regarding privacy. This document explains our privacy practices for the StoffelMPC framework - our open source multiparty computation framework available under the Apache 2 license.</p>

          <h2>Our Framework</h2>
          <p>StoffelMPC consists of:</p>
          <ul>
            <li>A programming language for writing multiparty computation applications</li>
            <li>A compiler that processes programs written in our language</li>
            <li>A virtual machine that executes the compiled programs</li>
          </ul>

          <h2>Data Collection</h2>
          <p>We do not collect any personal information or usage data from:</p>
          <ul>
            <li>Visitors to our website</li>
            <li>Users of our framework</li>
            <li>Applications built with our framework</li>
          </ul>

          <h2>Open Source</h2>
          <p>Our entire codebase is open source and freely available on Github. This means:</p>
          <ul>
            <li>All code can be inspected for security and privacy implications</li>
            <li>The framework can be used, modified and distributed under the Apache 2 license terms</li>
            <li>No hidden tracking or data collection mechanisms exist in the code</li>
          </ul>

          <h2>Third Party Services</h2>
          <p>Our website is hosted on Github Pages. While we do not collect any information, Github may collect basic server logs. Please refer to Github's privacy policy for details about their practices.</p>

          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy or our open source framework, you can:</p>
          <ul>
            <li>Open an issue on our Github repository</li>
            <li>Contact us at privacy@stoffellabs.com</li>
          </ul>
        </section>
      </main>
    );
  }

  export default PrivacyPolicy;
