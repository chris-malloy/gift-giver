# Gift Giver

This is a list app designed to help users organize their gifts and respective recipients.  The app was primarily built to improve Test Driven Development and using Jest and Enzyme in a React environment.

***

[Installation](https://github.com/chris-malloy/gift-giver#installation) | [Testing](https://github.com/chris-malloy/gift-giver#testing) | [Challenges and Solutions](https://github.com/chris-malloy/gift-giver#challenges-and-solutions) | [Code Snippets](https://github.com/chris-malloy/gift-giver#code-snippets) | [Acknowledgements](https://github.com/chris-malloy/gift-giver#acknowledgements)

***

## Installation

OS X & Linux:

```sh
npm install
```

## Testing

Snapshot testing is done with Jest and assertion testing is done with Enzyme.

```sh
npm install --save-dev enzyme react-test-renderer
```

You will need to install and configure the Enzyme Adapter by running the commonad and creating the following files so it know show to communicate with React.

```sh
npm i --save-dev enzyme enzyme-adapter-react-15
```

```javascript
// src/tempPolyfills.js
const requestAnimationFrame = global.requestAnimationFrame = callback => {
    setTimeout(callback, 0);
}

export default requestAnimationFrame;
```

```javascript
// src/setupTests.js
import requestAnimationFrame from './tempPolyfills';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });
```

### Challenges and Solutions

Here are some of challenges I encountered along the way and how I went about solving them.

### Code Snippets

### Acknowledgements

David Katz, thank you for your course.  It was a great way to take my React and Jest knowledge to the next level.
