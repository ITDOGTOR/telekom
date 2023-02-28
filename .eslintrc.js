module.exports = {
  extends: ['react-app', 'react-app/jest'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': 2,
  },
};
