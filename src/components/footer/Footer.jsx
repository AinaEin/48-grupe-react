import style from './Footer.module.css';

function Footer() {
    return (
      <footer className={style.mainFooter}>
        <a className={style.link} href="/">
          Terms of service
        </a>
        <p className={style.copyright}>
          Copyright &copy; 2024. AE + 48group
        </p>
      </footer>
    );
}

export { Footer };