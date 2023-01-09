module.exports = {
    extends: ['airbnb', 'eslint-config-airbnb-base',], parserOptions: {
        project: './tsconfig.json',
    }, rules: {
        "react/react-in-jsx-scope": "off"
    }
};
