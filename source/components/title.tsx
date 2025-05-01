import styles from '@styles/title.module.css';

type Properties = Readonly<{
  children: React.ReactNode;
}>;

export default function Component(properties: Properties) {
  return <h1 className={styles.component}>{properties.children}</h1>;
}
