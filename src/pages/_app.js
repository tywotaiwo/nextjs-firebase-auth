import { AuthProvider } from '../contexts/AuthContext'; // Adjust the path as necessary
import { UserProvider } from '../contexts/UserContext'; // Adjust the path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider> {/* Provides authentication context */}
      <UserProvider> {/* Provides user profile context and depends on AuthProvider */}
        <Component {...pageProps} />
      </UserProvider>
    </AuthProvider>
  );
}

export default MyApp;
