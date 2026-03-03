import { Route, Routes } from 'react-router';
import { CharactersPage, CharactersInfoPage, AppTemplate } from '@/pages';

const ROUTES = [
  {
    id: 'characters',
    path: '/',
    element: <CharactersPage />,
  },
  {
    id: 'character-info',
    path: 'character-info/:id',
    element: <CharactersInfoPage />,
  },
];

export function AppRouter() {
  return (
    <Routes>
      <Route
        path='/'
        element={<AppTemplate />}
      >
        {ROUTES.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
    </Routes>
  );
}
