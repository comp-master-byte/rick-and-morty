import styles from './CharachersInfoPage.module.css';
import { Loader, useRouter } from '@/shared';
import arrowBackIcon from '@/shared/assets/icons/arrow-back.svg';
import { Heading3 } from '@/shared/ui';

export function CharactersInfoPage() {
  const { goBack } = useRouter();

  return (
    <section className={styles.charactersInfoWrapper}>
      <button
        className={styles.charactersInfoBackButton}
        onClick={goBack}
      >
        <img src={arrowBackIcon} />
        <Heading3>GO BACK</Heading3>
      </button>
      <Loader
        variant='large'
        subtitle='Loading characters....'
      />
    </section>
  );
}
