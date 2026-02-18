import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export default function BrianStoryTutorial({ onClose }) {
  const { brianStory, getWord } = useTranslation();
  const story = brianStory.narrative;

  return (
    <div className="brian-story-modal">
      <div className="brian-story-content">
        <button className="close-button" onClick={onClose}>✕</button>
        <div className="brian-story-header">
          <span className="quantum-symbol">⚛️</span>
          <h2>{brianStory.lesson}</h2>
          <span className="frequency-badge">{brianStory.frequencyShift}</span>
        </div>
        <div className="brian-story-body">
          <p className="story-intro">{story.introduction}</p>
          <div className="story-scene before">
            <div className="speech-bubble before">"{story.beforeQuote}"</div>
          </div>
          <div className="quantum-arrow">⬇️ CONSCIOUS AWAKENING ⬇️</div>
          <div className="story-scene after">
            <div className="speech-bubble after">"{story.afterQuote}"</div>
          </div>
          <div className="practice-call">
            <button className="practice-button" onClick={onClose}>
              I Commit to Conscious Language
            </button>
          </div>
        </div>
        <div className="brian-story-footer">
          <span>Word: {getWord('BUT')}</span>
          <span>{brianStory.frequencyShift}</span>
        </div>
      </div>
    </div>
  );
}
