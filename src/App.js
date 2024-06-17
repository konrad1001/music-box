import * as Tone from 'tone';
import React, { useEffect, useState } from 'react';
import Home from './containers/Home';

function App() {

  const [isAudioReady, setIsAudioReady] = useState(true); // Track audio readiness

  return (
    <div className="App">
      {isAudioReady ? (
        <Home />
      ) : (
        <button onClick={() => {
          Tone.start().then(() => {
            setIsAudioReady(true);
          });
        }}>Start Audio</button>
      )
      }
    </div>
  );
}

export default App;
