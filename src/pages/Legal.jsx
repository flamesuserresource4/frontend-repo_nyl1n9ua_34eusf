export function Impressum() {
  return (
    <div className="px-6 sm:px-10 py-12 sm:py-16 max-w-3xl mx-auto prose prose-slate">
      <h1>Impressum (Legal Notice)</h1>
      <p>Leovora GmbH<br/>Pet Street 1<br/>10115 Berlin, Germany</p>
      <h3>Contact</h3>
      <p>Email: hello@leovora.com<br/>Phone: +49 30 123456</p>
      <h3>Managing Directors</h3>
      <p>Jane Doe, Max Mustermann</p>
      <h3>VAT ID</h3>
      <p>DE123456789</p>
    </div>
  )
}

export function Privacy() {
  return (
    <div className="px-6 sm:px-10 py-12 sm:py-16 max-w-3xl mx-auto prose prose-slate">
      <h1>Privacy Policy</h1>
      <p>We respect your privacy and protect your data. We only collect information necessary to provide our services. We never sell your data to third parties.</p>
      <h3>Data we collect</h3>
      <ul>
        <li>Contact details you provide (email, address)</li>
        <li>Order information for processing and delivery</li>
        <li>Anonymous analytics to improve our website</li>
      </ul>
      <h3>Your rights</h3>
      <p>You can request access, correction, or deletion of your personal data at any time by contacting us.</p>
    </div>
  )
}

export function Terms() {
  return (
    <div className="px-6 sm:px-10 py-12 sm:py-16 max-w-3xl mx-auto prose prose-slate">
      <h1>Terms & Conditions & Right of Withdrawal</h1>
      <h3>Terms & Conditions</h3>
      <p>All orders are subject to availability and confirmation of the order price. By placing an order you are offering to purchase a product and subject to the following terms and conditions.</p>
      <h3>Right of Withdrawal</h3>
      <p>You have the right to withdraw from this contract within 14 days without giving any reason. To exercise the right of withdrawal, contact us with your order details.</p>
      <h3>Returns</h3>
      <p>Items must be returned in original condition within 30 days of delivery.</p>
    </div>
  )
}
