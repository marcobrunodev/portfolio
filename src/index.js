import React from 'react';
import ReactDOM from 'react-dom';

import Size from './styles/settings/Size';
import Colors from './styles/settings/Colors';
import Gaps from './styles/settings/Gaps';
import Reset from './styles/generic/Reset';
import Base from './styles/elements/Base';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Size />
    <Colors />
    <Gaps />
    <Reset />
    <Base />

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
