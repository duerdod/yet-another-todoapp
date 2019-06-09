const theme = {
  black: '#383838'
};

export const styleReset = `
html {
  font-size: 16px;
};

body {
  font-family: sans-serif;
  color: #222222;
  box-sizing: border-box;
  background: linear-gradient(
    -90deg,
    rgba(17, 145, 207, 0.2) 0%,
    rgba(17, 145, 207, 0.2) 25%,
    rgba(17, 145, 207, 0.5) 25%,
    rgba(17, 145, 207, 0.5) 50%,
    rgba(17, 145, 207, 0.5) 50%,
    rgba(17, 145, 207, 0.2) 50%,
    rgba(17, 145, 207, 0.2) 75%,
    rgba(17, 145, 207, 0.5) 75%,
    rgba(17, 145, 207, 0.5) 100%
  );
  background-size: cover;
}
`;

export default theme;
