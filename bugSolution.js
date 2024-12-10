// bugSolution.js
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrl = async (event) => {
      const url = event.url;
      // process the URL
      console.log('Deep link received:', url);
    };

    const init = async () => {
      setInitialUrl(await Linking.getInitialURL());
      Linking.addEventListener('url', handleUrl);
    };
    init();

    return () => {
      Linking.removeEventListener('url', handleUrl);
    };
  }, []);

  // ... rest of your app

  return (
      <Text>Deep Link Test App</Text>
  );
}

export default App;