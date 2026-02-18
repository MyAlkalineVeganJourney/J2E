import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { wordDB } from '../data/WordDatabase';

const MAVJPositiveWordGameCore = () => {
  const [gameState, setGameState] = useState({
    score: 0,
    streak: 0,
    level: 1,
    currentWord: null,
    gameActive: true,
    godSpaceActivated: false,
    feedback: '',
    wordBasket: [],
    history: []
  });

  useEffect(() => {
    const positiveWords = wordDB.getPositiveWords();
    if (positiveWords.length > 0) {
      const randomWord = positiveWords[Math.floor(Math.random() * positiveWords.length)];
      setGameState(prev => ({ ...prev, currentWord: randomWord }));
    }
  }, []);

  const handleWordClick = useCallback((word) => {
    if (!gameState.gameActive || !word) return;

    const isPositive = word.category === 'positive';
    const isCorrect = isPositive;
    
    const baseScore = isCorrect ? 100 : -50;
    const godSpaceBonus = (gameState.godSpaceActivated || gameState.streak >= 4) ? 500 : 0;
    const newScore = Math.max(0, gameState.score + baseScore + (isCorrect ? godSpaceBonus : 0));
    const newStreak = isCorrect ? gameState.streak + 1 : 0;
    const newGodSpace = newStreak >= 5 || gameState.godSpaceActivated;
    
    let newLevel = gameState.level;
    if (newScore >= newLevel * 500 && newLevel < 3) {
      newLevel = newLevel + 1;
    }
    
    const positiveWords = wordDB.getPositiveWords();
    const nextWord = positiveWords[Math.floor(Math.random() * positiveWords.length)];

    setGameState(prev => ({
      ...prev,
      score: newScore,
      streak: newStreak,
      level: newLevel,
      currentWord: nextWord,
      godSpaceActivated: newGodSpace,
      feedback: isCorrect 
        ? (newGodSpace 
          ? '🌟 GOD SPACE ACTIVATED! +500' 
          : '✨ Frequency Elevated! +100')
        : '💫 This word carries a different frequency. Choose a positive word.',
      wordBasket: isCorrect 
        ? (prev.wordBasket.some(w => w.id === word.id) 
          ? prev.wordBasket 
          : [word, ...prev.wordBasket].slice(0, 10))
        : prev.wordBasket,
      history: [...prev.history, { 
        word: word.word, 
        correct: isCorrect, 
        frequency: word.coreFrequency,
        timestamp: Date.now() 
      }].slice(-10)
    }));
  }, [gameState]);

  const resetGame = useCallback(() => {
    const positiveWords = wordDB.getPositiveWords();
    const randomWord = positiveWords[Math.floor(Math.random() * positiveWords.length)];
    
    setGameState({
      score: 0,
      streak: 0,
      level: 1,
      currentWord: randomWord,
      gameActive: true,
      godSpaceActivated: false,
      feedback: '',
      wordBasket: [],
      history: []
    });
  }, []);

  const levelWords = useMemo(() => {
    const words = wordDB.getWordsByGameLevel(gameState.level)
      .filter(w => w.category === 'positive');
    return [...words]
      .sort(() => 0.5 - Math.random())
      .slice(0, 12);
  }, [gameState.level]);

  const styles = {
    stats: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: '20px 0',
      padding: '15px',
      background: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '12px',
      border: '1px solid rgba(255,215,0,0.3)',
      flexWrap: 'wrap',
      gap: '15px'
    },
    statItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: '80px'
    },
    statLabel: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: '0.8rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    statValue: {
      color: '#00d4ff',
      fontSize: '1.5rem',
      fontWeight: '900',
      lineHeight: '1.2'
    },
    godSpaceBadge: {
      width: '100%',
      textAlign: 'center',
      padding: '10px',
      background: 'linear-gradient(135deg, #FFD700, #FF00FF)',
      borderRadius: '30px',
      fontWeight: '900',
      color: 'black',
      fontSize: '1rem',
      animation: 'pulse 2s ease-in-out infinite',
      marginTop: '10px'
    },
    currentWordCard: {
      background: 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(0,0,0,0.9))',
      border: '2px solid #FFD700',
      borderRadius: '20px',
      padding: '25px',
      textAlign: 'center',
      boxShadow: '0 0 40px rgba(255,215,0,0.3)',
      margin: '25px 0'
    },
    currentWordHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
      padding: '0 10px'
    },
    currentWordFrequency: {
      color: '#00d4ff',
      fontSize: '0.9rem',
      fontWeight: '700',
      padding: '5px 15px',
      background: 'rgba(0,212,255,0.1)',
      border: '1px solid #00d4ff',
      borderRadius: '25px'
    },
    currentWordClassification: {
      fontSize: '0.9rem',
      fontWeight: '700',
      padding: '5px 15px',
      borderRadius: '25px',
      background: 'rgba(76, 175, 80, 0.15)',
      border: '1px solid #4CAF50',
      color: '#4CAF50'
    },
    currentWordDisplay: {
      fontSize: '3rem',
      color: '#FFD700',
      fontWeight: '900',
      textShadow: '0 0 25px rgba(255,215,0,0.8)',
      letterSpacing: '5px',
      wordBreak: 'break-word',
      lineHeight: '1.2'
    },
    wordGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
      gap: '12px',
      margin: '25px 0'
    },
    wordButton: {
      padding: '14px 8px',
      background: 'rgba(255, 215, 0, 0.1)',
      border: '1px solid #FFD700',
      borderRadius: '10px',
      color: '#FFD700',
      fontSize: '0.95rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      minHeight: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textTransform: 'capitalize',
      wordBreak: 'break-word',
      textAlign: 'center'
    },
    feedback: {
      padding: '15px',
      margin: '20px 0',
      background: 'rgba(0, 212, 255, 0.1)',
      border: '1px solid #00d4ff',
      borderRadius: '12px',
      color: '#00d4ff',
      textAlign: 'center',
      fontWeight: '700',
      fontSize: '1rem'
    },
    wordBasket: {
      marginTop: '25px',
      padding: '20px',
      background: 'rgba(0, 0, 0, 0.3)',
      border: '1px solid #FFD700',
      borderRadius: '12px'
    },
    basketTitle: {
      color: '#FFD700',
      fontSize: '1rem',
      fontWeight: '700',
      margin: '0 0 15px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    basketTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    },
    basketTag: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      background: 'rgba(255, 215, 0, 0.15)',
      border: '1px solid #FFD700',
      borderRadius: '30px',
      color: '#FFD700',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    basketRemove: {
      background: 'none',
      border: 'none',
      color: '#ff6b6b',
      cursor: 'pointer',
      fontSize: '1rem',
      padding: '0 2px',
      marginLeft: '5px'
    },
    resetButton: {
      width: '100%',
      padding: '14px',
      marginTop: '25px',
      background: 'rgba(255, 0, 0, 0.2)',
      color: '#ff6b6b',
      border: '2px solid #ff6b6b',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }
  };

  if (!gameState.currentWord) {
    return <div style={{ textAlign: 'center', padding: '40px', color: '#FFD700' }}>🌀 Loading sacred frequencies...</div>;
  }

  return (
    <div>
      <div style={styles.stats}>
        <div style={styles.statItem}>
          <span style={styles.statLabel}>SCORE</span>
          <span style={styles.statValue}>{gameState.score}</span>
        </div>
        <div style={styles.statItem}>
          <span style={styles.statLabel}>STREAK</span>
          <span style={styles.statValue}>{gameState.streak}</span>
        </div>
        <div style={styles.statItem}>
          <span style={styles.statLabel}>LEVEL</span>
          <span style={styles.statValue}>{gameState.level}/3</span>
        </div>
      </div>

      {gameState.godSpaceActivated && (
        <div style={styles.godSpaceBadge}>
          🌟 GOD SPACE ACTIVATED 🌟
        </div>
      )}

      <div style={styles.currentWordCard}>
        <div style={styles.currentWordHeader}>
          <span style={styles.currentWordFrequency}>
            {gameState.currentWord.coreFrequency}
          </span>
          <span style={styles.currentWordClassification}>
            {gameState.currentWord.classification}
          </span>
        </div>
        <div style={styles.currentWordDisplay}>
          {gameState.currentWord.word}
        </div>
      </div>

      <div style={styles.wordGrid}>
        {levelWords.map((word) => (
          <button
            key={word.id}
            style={styles.wordButton}
            onClick={() => handleWordClick(word)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {word.word}
          </button>
        ))}
      </div>

      {gameState.feedback && (
        <div style={styles.feedback}>
          {gameState.feedback}
        </div>
      )}

      {gameState.wordBasket.length > 0 && (
        <div style={styles.wordBasket}>
          <div style={styles.basketTitle}>
            <span>📚</span> YOUR WORD BASKET
          </div>
          <div style={styles.basketTags}>
            {gameState.wordBasket.map((word) => (
              <span
                key={word.id}
                style={styles.basketTag}
                onClick={() => handleWordClick(word)}
              >
                {word.word}
                <span style={{ fontSize: '0.7rem', color: '#00d4ff', marginLeft: '5px' }}>
                  {word.coreFrequency}
                </span>
                <button
                  style={styles.basketRemove}
                  onClick={(e) => {
                    e.stopPropagation();
                    setGameState(prev => ({
                      ...prev,
                      wordBasket: prev.wordBasket.filter(w => w.id !== word.id)
                    }));
                  }}
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      <button
        style={styles.resetButton}
        onClick={resetGame}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 0, 0, 0.3)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 0, 0, 0.2)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        🔄 RESET GAME
      </button>
    </div>
  );
};

export default MAVJPositiveWordGameCore;
