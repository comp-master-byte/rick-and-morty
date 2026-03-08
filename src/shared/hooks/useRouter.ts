import { useNavigate } from 'react-router';
import { useCallback } from 'react';

export function useRouter() {
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  return { goBack };
}
