module.exports = {
  root: true,
  extends: 'universe/native',
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/namespace': [2, { allowComputed: false }],
  },
};
