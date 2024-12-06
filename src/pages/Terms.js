function Terms() {
  const currentDate = new Date();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <main className="App-header">
      <section className="terms">
        <h1>Terms and Conditions</h1>
        <p>Last updated: {month} {year}</p>

        <h2>1. Introduction</h2>
        <p>These Terms and Conditions govern your use of StoffelMPC, an open source multiparty computation framework ("the Framework") provided by Stoffel Labs Inc. ("we", "us", or "our").</p>

        <h2>2. License</h2>
        <p>The Framework is licensed under the Apache License, Version 2.0 (the "License"). You may obtain a copy of the License at:</p>
        <p><a href="http://www.apache.org/licenses/LICENSE-2.0">http://www.apache.org/licenses/LICENSE-2.0</a></p>

        <h2>3. Permitted Use</h2>
        <p>Under the Apache 2.0 License, you are permitted to:</p>
        <ul>
          <li>Use the Framework for any purpose, including commercial use</li>
          <li>Modify the Framework</li>
          <li>Distribute the original or modified versions</li>
          <li>Sublicense the Framework</li>
        </ul>

        <h2>4. Requirements</h2>
        <p>When using or distributing the Framework, you must:</p>
        <ul>
          <li>Include a copy of the Apache 2.0 License</li>
          <li>Include any original copyright, patent, trademark, and attribution notices</li>
          <li>State any significant changes made to the Framework</li>
        </ul>

        <h2>5. Disclaimer of Warranty</h2>
        <p>The Framework is provided "AS IS", without warranty of any kind, express or implied. We make no warranties regarding the Framework's fitness for any particular purpose, accuracy, or performance.</p>

        <h2>6. Limitation of Liability</h2>
        <p>In no event shall Stoffel Labs Inc. be liable for any direct, indirect, incidental, special, exemplary, or consequential damages arising from the use of the Framework.</p>

        <h2>7. Contributions</h2>
        <p>If you contribute to the Framework, you agree that your contributions will be licensed under the same Apache 2.0 License.</p>

        <h2>8. Contact</h2>
        <p>For questions about these Terms and Conditions, please:</p>
        <ul>
          <li>Open an issue on our Github repository</li>
          <li>Contact us at legal@stoffellabs.com</li>
        </ul>
      </section>
    </main>
  );
}

export default Terms;