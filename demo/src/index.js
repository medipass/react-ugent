import React, { Component } from 'react';
import { render } from 'react-dom';

import Ugent from '../../src/index';

class Demo extends Component {
  render() {
    return (
      <div>
        <div>
          <Ugent browser="chrome">Only shows on chrome</Ugent>
        </div>
				<div>
          <Ugent browser="chrome" device="computer">{({ parsedUserAgent }) => <span>Only shows on chrome. User agent: {JSON.stringify(parsedUserAgent)}</span>}</Ugent>
        </div>
        <div>
          <Ugent browser="chrome" device="mobile">
            Only shows when on chrome and mobile
          </Ugent>
        </div>
				<div>
          <Ugent browser="chrome" device="mobile" os="ios">
            Only shows when on chrome and mobile and iOS
          </Ugent>
        </div>
				<div>
          <Ugent browser="safari" os="ios">
            Only shows when on safari and iOS
          </Ugent>
        </div>
				<div>
          <Ugent browser="ie" os="windows">
            Only shows when on IE and Windows
          </Ugent>
        </div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
