import styles from "./styles.module.css"

export interface IAppContainer {
  children: React.ReactNode
}

export default function AppContainer({ children }: IAppContainer) {
  return <div className={styles.appContainer}>{children}</div>
}
