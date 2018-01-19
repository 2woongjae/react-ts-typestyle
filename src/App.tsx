import * as React from 'react';
import './App.css';
import { style, cssRaw, keyframes } from 'typestyle';

cssRaw(`
.mark {
  background-color: white;
}
`);

const h2Style = style({
  fontSize: 30,
  color: 'aquamarine',
  textDecoration: 'underline',
  $nest: {
    '&:hover': {
      color: 'blue'
    },
    '&::after': {
      content: `' World!!'`
    },
    '&::selection': {
      color: 'orange'
    }
  },
  animationDuration: '5s',
  animationName: keyframes({
    from: { opacity: 0 },
    to: { opacity: 100 }
  })
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2 className={h2Style + ' mark'}>Hello</h2>
      </div>
    );
  }
}

export default App;
