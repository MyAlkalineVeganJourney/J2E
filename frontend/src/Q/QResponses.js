export async function getResponse(input) {
  const q = input.toLowerCase();

  if (q.includes('seamoss')) {
    return 'Sea moss supports mineral balance and cellular hydration.';
  }

  if (q.includes('frequency')) {
    return 'Frequency is how the body communicates at the cellular level.';
  }

  if (q.includes('journey')) {
    return 'The journey is alignment, rhythm, and remembrance.';
  }

  return 'I can assist with wellness, products, or human frequency.';
}
