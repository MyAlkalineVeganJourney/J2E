const config = {
  scanDirs: ['./src/Pages', './src/components'],
  baseLanguage: 'English',
  targetLanguages: [
    'Spanish', 'French', 'German', 'Italian', 'Chinese', 'Taiwanese',
    'Amharic', 'Arabic', 'Swahili', 'Patois', 'BAramaic', 'NAramaic',
    'SAramaic', 'Hebrew', 'Greek', 'Latin', 'Sanskrit'
  ],
  messagesDir: './src/translations',
  rewriteSourceFiles: true,
  lintAfterRewrite: true,
  parallelTranslations: 5
};
export default config;
