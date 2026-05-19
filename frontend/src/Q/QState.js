export function createInitialState() {
  return {
    sessionId: crypto.randomUUID(),
    currentLanguage: 'en',
    speechEnabled: true,
    narrationEnabled: false,
    accessibilityMode: true,
    learningMode: true,
    currentPageContext: null,
    messages: [
      {
        sender: 'q',
        text: 'QFinity is active. I can guide, translate, speak, and assist across the platform.'
      }
    ]
  };
}