import styles from '../styles/header.module.scss'

export default function Header() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <h1 className={styles.title}>
            Find a Film
          </h1>
        </div>
      </div>
    </div>
  )
}