import React from 'react';
import {render} from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HelloWorld from './components/HelloWorld';

render(<HelloWorld/>, document.getElementById('app'));
