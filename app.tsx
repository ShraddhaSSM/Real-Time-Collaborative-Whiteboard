import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { init } from 'keycloak-js';
import Whiteboard from './components/Whiteboard';
import 'fabric';

const App: React.FC = () => {
  const [keycloak, setKeycloak] = useState<any>(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const keycloakInstance = init({
      url: 'http://localhost:8080/auth',
      realm: 'your-realm',
      clientId: 'your-client-id',
    });

    keycloakInstance.init({ onLoad: 'login-required' }).then((authenticated) => {
      setKeycloak(keycloakInstance);
      setAuthenticated(authenticated);
    });
  }, []);

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <Container className="mt-3">
      {authenticated ? (
        <>
          <Button onClick={handleLogout} variant="danger">
            Logout
          </Button>
          <Whiteboard />
        </>
      ) : (
        <p>Please log in to access the whiteboard.</p>
      )}
    </Container>
  );
};