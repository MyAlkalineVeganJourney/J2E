import React, { useRef, useEffect } from 'react';
import { getResponse } from './QResponses';
import { validateInput } from './QSecurity';

export default function QChat({ qState, setQState, onClose, VoiceComponent }) {
  const inputRef = useRef(null);
  const endRef = useRef(null);

  const sendMessage = async (text) => {
    if (!validateInput(text)) return;

    setQState(s => ({
      ...s,
      messages: [...s.messages, { sender: 'user', text }]
    }));

    const response = await getResponse(text, qState);

    setQState(s => ({
      ...s,
      messages: [...s.messages, { sender: 'q', text: response }]
    }));

    inputRef.current.value = '';
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [qState.messages]);

  return (
    <div className="q-container">
      <header className="q-header">
        <span>Q — Collective Intelligence</span>
        <button onClick={onClose}>×</button>
      </header>

      <div className="q-messages">
        {qState.messages.map((m, i) => (
          <div key={i} className={`q-msg ${m.sender}`}>
            {m.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <footer className="q-input">
        <input
          ref={inputRef}
          placeholder="Ask Q…"
          onKeyDown={e => e.key === 'Enter' && sendMessage(e.target.value)}
        />
        <button onClick={() => sendMessage(inputRef.current.value)}>Send</button>
        <VoiceComponent onTranscript={sendMessage} />
      </footer>
    </div>
  );
}
