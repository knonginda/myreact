import '../css/style.css';

import React from 'react';
import { render } from 'react-dom';

var myDivElement = '<div className="foo">444</div>';
render(myDivElement, document.getElementById('example'));