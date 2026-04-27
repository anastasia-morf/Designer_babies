import { useState } from 'react';

import { GameIntro } from './components/GameIntro';
import { Scene1 } from './components/Scene1';
import { Scene2 } from './components/Scene2';
import { Scene3 } from './components/Scene3';
import { Scene4 } from './components/Scene4';
import { Scene5 } from './components/Scene5';
import { FinalOutcome } from './components/FinalOutcome';

export type Choice = 'A' | 'B' | null;
export type GameMode = 'narrative' | null;

export interface GameState {
  scene1: Choice;
  scene2: Choice;
  scene3: Choice;
  scene4: Choice;
  scene5: Choice;
}

const initialChoices: GameState = {
  scene1: null,
  scene2: null,
  scene3: null,
  scene4: null,
  scene5: null,
};

export default function App() {
  const [gameMode, setGameMode] = useState<GameMode>(null);
  const [currentScene, setCurrentScene] = useState(0);
  const [choices, setChoices] = useState<GameState>(initialChoices);

  const handleModeSelect = (mode: GameMode) => {
    setGameMode(mode);

    if (mode === 'narrative') {
      setCurrentScene(1);
      setChoices(initialChoices);
    }
  };

  const handleChoice = (scene: number, choice: Choice) => {
    const sceneKey = `scene${scene}` as keyof GameState;

    setChoices((previousChoices) => ({
      ...previousChoices,
      [sceneKey]: choice,
    }));

    setCurrentScene(scene + 1);
  };

  const handleHome = () => {
    setGameMode(null);
    setCurrentScene(0);
    setChoices(initialChoices);
  };

  return (
    <>
      {gameMode === null && <GameIntro onModeSelect={handleModeSelect} />}

      {gameMode === 'narrative' && (
        <>
          {currentScene === 1 && (
            <Scene1
              onChoice={(choice) => handleChoice(1, choice)}
              onHome={handleHome}
            />
          )}

          {currentScene === 2 && (
            <Scene2
              choices={choices}
              onChoice={(choice) => handleChoice(2, choice)}
              onHome={handleHome}
            />
          )}

          {currentScene === 3 && (
            <Scene3
              choices={choices}
              onChoice={(choice) => handleChoice(3, choice)}
              onHome={handleHome}
            />
          )}

          {currentScene === 4 && (
            <Scene4
              choices={choices}
              onChoice={(choice) => handleChoice(4, choice)}
              onHome={handleHome}
            />
          )}

          {currentScene === 5 && (
            <Scene5
              choices={choices}
              onChoice={(choice) => handleChoice(5, choice)}
              onHome={handleHome}
            />
          )}

          {currentScene === 6 && (
            <FinalOutcome
              choices={choices}
              onRestart={handleHome}
              onHome={handleHome}
            />
          )}
        </>
      )}
    </>
  );
}
