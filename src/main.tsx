/* @refresh reload */

import { render } from 'solid-js/web';
import { App } from './App';
import './index.css';

render(() => <App foo="bar" />, document.getElementById('root') as HTMLElement);
