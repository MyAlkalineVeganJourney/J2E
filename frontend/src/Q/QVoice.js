export default function QVoice({ onTranscript }) {
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = e => {
      onTranscript(e.results[0][0].transcript);
    };
    recognition.start();
  };

  return (
    <button className="q-voice" onClick={startListening}>
      🎤
    </button>
  );
}
