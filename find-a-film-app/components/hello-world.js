import styles from './hello-world.module.scss'

export default function HelloWorld() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className={styles.hello}>
            Hello World, I am being styled using SCSS Modules!
          </div>
        </div>
      </div>
    </div>
  )
}
