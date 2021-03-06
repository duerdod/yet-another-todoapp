const breakpoints = [576, 768, 992, 1200];
const media = breakpoints.map(
  breakpoint => `@media screen and (max-width: ${breakpoint}px) {`
);

export const styleReset = `
html {
  font-size: 16px;
};

body {
  height: 100vh;
  font-family: sans-serif;
  color: #222222;
  overflow: scroll;
  box-sizing: border-box;
  background: radial-gradient(
    circle,
    rgb(193, 81, 111) 0%,
    rgb(193, 81, 111) 25%,
    rgb(33, 54, 75) 25%,
    rgb(33, 54, 75) 50%,
    rgb(47, 72, 92) 50%,
    rgb(47, 72, 92) 75%,
    rgb(33, 54, 75) 75%,
    rgb(33, 54, 75) 100%
  );
  background-size: 50% 200%;
}
`;

const theme = {
  black: '#383838',
  primary: 'rgb(33, 54, 75)',
  secondary: 'rgb(193, 81, 111)',
  media: media
};

export default theme;

// background-image: linear-gradient(to right, #3cbfc4, #75bb94, #a9b076, #cea279, #db9896);
