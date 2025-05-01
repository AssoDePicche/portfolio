import Image from 'next/image';

import styles from '@styles/avatar.module.css';

type Properties = Readonly<{
  source: string;
  description: string;
}>;

export default function Component(properties: Properties) {
  return <Image className={styles.component} src={properties.source} alt={properties.description} width={300} height={300} />;
}
