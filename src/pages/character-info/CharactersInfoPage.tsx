import styles from './CharachersInfoPage.module.css';
import { ArrowBackIcon, Loader, useRouter, Heading3 } from '@/shared';

export function CharactersInfoPage() {
  const { goBack } = useRouter();

  return (
    <section className={styles.charactersInfoWrapper}>
      <button
        className={styles.charactersInfoBackButton}
        onClick={goBack}
      >
        <ArrowBackIcon />
        <Heading3>GO BACK</Heading3>
      </button>
      <Loader
        variant='large'
        subtitle='Loading characters....'
      />
    </section>
  );
}
