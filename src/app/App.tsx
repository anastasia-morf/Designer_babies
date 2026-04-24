import { useState } from 'react';
import { GameIntro } from './components/GameIntro';
import { Scene1 } from './components/Scene1';
import { Scene2 } from './components/Scene2';
import { Scene3 } from './components/Scene3';
import { Scene4 } from './components/Scene4';
import { Scene5 } from './components/Scene5';
import { FinalOutcome } from './components/FinalOutcome';
import { TraitSelection } from './components/TraitSelection';
import { OutcomeScreen } from './components/OutcomeScreen';

export type Choice = 'A' | 'B' | null;
export type GameMode = 'narrative' | 'trait-designer' | null;

export interface GameState {
  scene1: Choice;
  scene2: Choice;
  scene3: Choice;
  scene4: Choice;
  scene5: Choice;
}

export interface SelectedTraits {
  physical: string[];
  cognitive: string[];
  health: string[];
}

export default function App() {
  const [gameMode, setGameMode] = useState<GameMode>(null);
  const [currentScene, setCurrentScene] = useState<number>(0);
  const [choices, setChoices] = useState<GameState>({
    scene1: null,
    scene2: null,
    scene3: null,
    scene4: null,
    scene5: null,
  });
  const [selectedTraits, setSelectedTraits] = useState<SelectedTraits>({
    physical: [],
    cognitive: [],
    health: []
  });
  const [budget, setBudget] = useState(100000);

  const handleModeSelect = (mode: GameMode) => {
    setGameMode(mode);
    if (mode === 'narrative') {
      setCurrentScene(1);
      setChoices({
        scene1: null,
        scene2: null,
        scene3: null,
        scene4: null,
        scene5: null,
      });
    } else if (mode === 'trait-designer') {
      setCurrentScene(1);
      setSelectedTraits({ physical: [], cognitive: [], health: [] });
      setBudget(100000);
    }
  };

  const handleChoice = (scene: number, choice: Choice) => {
    setChoices({
      ...choices,
      [`scene${scene}`]: choice,
    });
    setCurrentScene(scene + 1);
  };

  const handleTraitComplete = () => {
    setCurrentScene(2);
  };

  const handleRestart = () => {
    setGameMode(null);
    setCurrentScene(0);
    setChoices({
      scene1: null,
      scene2: null,
      scene3: null,
      scene4: null,
      scene5: null,
    });
    setSelectedTraits({ physical: [], cognitive: [], health: [] });
    setBudget(100000);
  };

  const handleHome = () => {
    setGameMode(null);
    setCurrentScene(0);
    setChoices({
      scene1: null,
      scene2: null,
      scene3: null,
      scene4: null,
      scene5: null,
    });
    setSelectedTraits({ physical: [], cognitive: [], health: [] });
    setBudget(100000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {gameMode === null && <GameIntro onModeSelect={handleModeSelect} />}

      {gameMode === 'narrative' && (
        <>
          {currentScene === 1 && <Scene1 onChoice={(choice) => handleChoice(1, choice)} onHome={handleHome} />}
          {currentScene === 2 && <Scene2 choices={choices} onChoice={(choice) => handleChoice(2, choice)} onHome={handleHome} />}
          {currentScene === 3 && <Scene3 choices={choices} onChoice={(choice) => handleChoice(3, choice)} onHome={handleHome} />}
          {currentScene === 4 && <Scene4 choices={choices} onChoice={(choice) => handleChoice(4, choice)} onHome={handleHome} />}
          {currentScene === 5 && <Scene5 choices={choices} onChoice={(choice) => handleChoice(5, choice)} onHome={handleHome} />}
          {currentScene === 6 && <FinalOutcome choices={choices} onRestart={handleRestart} onHome={handleHome} />}
        </>
      )}

      {gameMode === 'trait-designer' && (
        <>
          {currentScene === 1 && (
            <TraitSelection
              selectedTraits={selectedTraits}
              setSelectedTraits={setSelectedTraits}
              budget={budget}
              setBudget={setBudget}
              onComplete={handleTraitComplete}
              onHome={handleHome}
            />
          )}
          {currentScene === 2 && (
            <OutcomeScreen
              selectedTraits={selectedTraits}
              budgetSpent={100000 - budget}
              onRestart={handleRestart}
              onHome={handleHome}
            />
          )}
        </>
      )}
    </div>
  );
}