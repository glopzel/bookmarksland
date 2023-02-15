const CTA = () => {
  return (
    <div className="cta">
      <div className="container">
      <section className="small-container flex">
            <span className="text-center">35,000+ already joined</span>
            <h4 className="cta-heading text-center">Stay up-to-date with what we’re doing</h4>
            <form className="flex">
                <label htmlFor="email-input"></label>
                <input type="email" name="email-input" id="email-input" placeholder="Enter your email address" required />
                <button type="submit" className="btn accent-btn">Contact Us</button>
            </form>
        </section>
      </div>
    </div>
  )
}

export default CTA