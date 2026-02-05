export function validateInput(text) {
  if (!text || text.length > 500) return false;

  const blocked = ['diagnose', 'prescribe', 'medication', 'drug'];
  return !blocked.some(w => text.toLowerCase().includes(w));
}
