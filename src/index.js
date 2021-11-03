import "@msrvida/sanddance-explorer/dist/css/sanddance-explorer.css";
import './index.css';
import * as deck from '@deck.gl/core';
import * as layers from '@deck.gl/layers';
import * as luma from '@luma.gl/core';
import * as fluentui from '@fluentui/react';
import * as vega from 'vega';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Explorer, use } from '@msrvida/sanddance-explorer';

fluentui.initializeIcons();

use(fluentui, React, ReactDOM, vega, deck, layers, luma);

const data = [
  { a: 1, b: "c1" },
  { a: 1, b: "c2" },
  { a: 2, b: "c3" },
  { a: 3, b: "c4" }
];

const explorerProps = {
    logoClickUrl: 'https://microsoft.github.io/SandDance/',
    mounted: explorer => {
        explorer.load(data);
    }
};

ReactDOM.render(React.createElement(Explorer, explorerProps), document.getElementById('root'));