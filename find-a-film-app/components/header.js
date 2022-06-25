import styles from '../styles/header.module.scss';
import Link from 'next/link'
import Logo from './logo';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12">
                    <Link href="/">
                        <a className={styles.link} title={"Back home"}>
                            <Logo />
                        </a>
                    </Link>
                    </div>
                    <div className="col-8 col-md-6">
                        <h1 className={styles.title}>
                            Find-a-Film
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    )
}