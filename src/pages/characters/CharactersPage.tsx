import { Link } from 'react-router';
import styles from './CharactersPage.module.css';
import rickAndMortyMainLogo from '@/shared/assets/icons/rick-and-morty.svg';
import { Loader } from '@/shared';

export function Characters() {
  return (
    <section className={styles.charactersPageWrapper}>
      <img
        src={rickAndMortyMainLogo}
        className={styles.charactersMainLogo}
      />

      <h3>Посмотреть страницу с одним персонажем</h3>
      <Link to='/character-info/123-fake-id'>Посмотреть</Link>
    </section>
  );
}
