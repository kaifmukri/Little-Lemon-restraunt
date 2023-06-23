import classes from "./Footer.css";

export default function Footer() {
  return (
    <header className={classes.mainHeader}>
      <nav className={classes.nav}>
        <div className="background">
          <h1>OUR SOCIAL MEDIAS:</h1>
          <div className="text">
            <p>IG</p>
            <p>TW</p>
            <p>G-mail</p>
            <p>&copy; 2023 Littlelemon.com</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
