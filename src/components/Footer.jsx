export default function Footer() {
  return (
    <footer id="footer">
      <div className="inner-layout">
        <div className="row-1">
          <div className="contact">
            <h2>Contact</h2>
            <p>
              Email: <a href="mailto:test@test.de " />
            </p>
            <p>
              Phone: <a href="tel:+1234567890" />
            </p>
          </div>
        </div>
      </div>

        <p className="text-center">
          {"\u00A9" + new Date().getFullYear() + " Mohammadali Karimi"}
        </p>
    </footer>
  );
}
