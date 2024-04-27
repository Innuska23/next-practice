import Image from 'next/image';
import meImage from './me.jpg'

import styles from './about.module.css';

export default function AboutPage() {
    return (
        <article className={styles.root}>
            <Image src={meImage} alt="my photo" loading='eager' />
            <div>Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun.</div>
        </article>
    )
}

