export function createInitialState() {
  return {
    sessionId: crypto.randomUUID(),
    messages: [
      {
        sender: 'q',
        text: 'I am Q. Ask about wellness, frequency, nutrition, or the journey.'
      }
    ]
  };
}
