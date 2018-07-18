// @flow
import { Component, type Node } from 'react';
import UAParser from 'ua-parser-js';
import idx from 'idx';

const doesNotMatch = ({
  target,
  parsedTarget,
  predicateKey
}: {
  target: ?string,
  parsedTarget: Object,
  predicateKey: string
}) =>
  // $FlowFixMe
  target && !(idx(parsedTarget, _ => _[predicateKey].toLowerCase()) || '').includes(target);

type Props = {
  browser?: string, // eslint-disable-line
  children: Node | Function,
  device?: string, // eslint-disable-line
  os?: string // eslint-disable-line
};
type State = {
  parsedUserAgent: ?Object,
  shouldRender: boolean,
  userAgent: ?Object
};

export default class extends Component<Props, State> {
  static defaultProps = {
    browser: null,
    device: null,
    os: null
  };

  state = {
    parsedUserAgent: null,
    shouldRender: false,
    userAgent: null
  };

  static getDerivedStateFromProps = (props: Props) => {
    const userAgent = window.navigator.userAgent;
    const parser = new UAParser(userAgent);
    const { browser, device, os } = props;

    const parsedBrowser = parser.getBrowser();
    const parsedDevice = parser.getDevice();
    const parsedOS = parser.getOS();

    // If the parsed device has no type, then we can assume that the device is a computer.
    if (!parsedDevice.type) {
      parsedDevice.type = 'computer';
    }

    // Figure out if the target user agent attributes match the actual user agent. If they all match, then render.
    let shouldRender = true;
    if (
      doesNotMatch({
        target: browser,
        parsedTarget: parsedBrowser,
        predicateKey: 'name'
      })
    ) {
      shouldRender = false;
    }
    if (
      doesNotMatch({
        target: device,
        parsedTarget: parsedDevice,
        predicateKey: 'type'
      })
    ) {
      shouldRender = false;
    }
    if (doesNotMatch({ target: os, parsedTarget: parsedOS, predicateKey: 'name' })) {
      shouldRender = false;
    }

    const parsedUserAgent = {
      browser: parsedBrowser,
      device: parsedDevice,
      os: parsedOS
    };

    return {
      parsedUserAgent,
      shouldRender,
      userAgent
    };
  };

  render() {
    const { children } = this.props;
    const { parsedUserAgent, shouldRender, userAgent } = this.state;
    if (shouldRender) {
      return typeof children === 'function' ? children({ parsedUserAgent, userAgent }) : children;
    }
    return null;
  }
}
