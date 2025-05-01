import styles from '@styles/paragraph.module.css';

type Properties = Readonly<{
  children: React.ReactNode;
}>;

export default function Component(properties: Properties) {
  return <p className={styles.component}>{properties.children}</p>;
}
