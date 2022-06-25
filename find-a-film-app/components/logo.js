import styles from '../styles/logo.module.scss';
import Image from 'next/image'
import logo from '../assets/logo.png'


export default function Logo() {
    return (
        <div className={styles.logo}>
            <Image src={logo} alt="Find-a-Film" layout="responsive"/>
        </div>
    )
}