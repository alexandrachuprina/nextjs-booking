import styles from "../styles/components/Layout.module.scss";

export default function Layout({ Component, pageProps }: any) {
  return (
    <div className={styles.component}>
      <Component {...pageProps} />
    </div>
  );
}
