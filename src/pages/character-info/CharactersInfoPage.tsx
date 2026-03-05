import styles from './CharachersInfoPage.module.css';
import { ArrowBackIcon, Loader, useRouter } from '@/shared';

export function CharactersInfoPage() {
  const { goBack } = useRouter();

  return (
    <section className={styles.charactersInfoWrapper}>
      <button
        className={styles.charactersInfoBackButton}
        onClick={goBack}
      >
        <ArrowBackIcon />
        <h3 className='heading3'>GO BACK</h3>
      </button>
      <Loader variant='large' />
    </section>
  );
}
