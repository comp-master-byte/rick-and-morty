import { Link } from 'react-router';
import styles from './CharactersPage.module.css';
import { MainRickAndMortyIcon } from '@/shared';

export function CharactersPage() {
  return (
    <section className={styles.charactersPageWrapper}>
      <MainRickAndMortyIcon />
      <h3>Посмотреть страницу с одним персонажем</h3>
      <Link to='/character-info/123-fake-id'>Посмотреть</Link>
    </section>
  );
}
