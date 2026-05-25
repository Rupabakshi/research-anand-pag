import { RouterProvider } from 'react-router';
import { router } from './routes';
import { MediaConfigProvider } from './contexts/MediaConfigContext';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <MediaConfigProvider>
        <RouterProvider
          router={router}
          fallbackElement={null}
        />
      </MediaConfigProvider>
    </ThemeProvider>
  );
}