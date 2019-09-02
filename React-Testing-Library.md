## React-Testing-Library

[React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro) is a solution for writing maintainable tests for your React components. It's built on top of [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro) by adding APIs for working with React components.

While using this library, you work with actual DOM nodes instead of instances of rendered React components. The utilities this library provides facilitate querying the DOM in the same way the user would. Finding for elements by their label text (just like a user would), finding links and buttons from their text (like a user would).

## Most important APIs

- `render` - Render into a container which is appended to `document.body`:

```js
function render(
  ui: React.ReactElement<any>,
  options?: {
    /* Options are for more advanced use cases, you won't often use this */
  }
): RenderResult
```

Check full [documentation](https://testing-library.com/docs/react-testing-library/api#render) of `render`.

- `rerender` - rerenders the component. It's useful for ensuring that component works correctly when props are being updated:

```js
import { render } from '@testing-library/react';

const { rerender } = render(<NumberDisplay number={1} />);

// re-render the same component with different props
rerender(<NumberDisplay number={2} />);
```

- `unmount` - This will cause the rendered component to be unmounted. This is useful for testing what happens when your component is removed from the page (like testing that you don't leave event handlers hanging around causing memory leaks):

```js
import { render } from '@testing-library/react';

const { container, unmount } = render(<Login />);
unmount();
// your component has been unmounted and now: container.innerHTML === ''
```

- `fireEvent` - Fire DOM events:

```js
fireEvent.click(getByText('Submit'));
```

Check [documentation](https://testing-library.com/docs/dom-testing-library/api-events) for more examples of `fireEvent`.

- `queries`:
  - `getBy*` - queries return the first matching node for a query, and throw an error if no elements match or if more than one match is found (use getAllBy instead)..
  - `findBy*` - queries return a promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 4500ms. If you need to find more than one element, then use findAllBy.
  - `queryBy*` - queries return the first matching node for a query, and return null if no elements match. This is useful for asserting an element that is not present. This throws if more than one match is found (use queryAllBy instead).

Example:

```js
import { getByText } from '@testing-library/dom';

const container = document.body;
const aboutAnchorNode = getByText(container, /about/i); // search for a text node that has `textContent` matching /about/i
```

```js
import { getByLabelText } from '@testing-library/dom';

const container = document.body;
const inputNode = getByLabelText(container, 'Username'); // search for the label matching 'Username', then find the element associated with that label.
```

```js
import { getByPlaceholderText } from '@testing-library/dom';

const container = document.body;
const inputNode = getByPlaceholderText(container, 'Username'); // search for all elements with a placeholder attribute and find one that matches 'Username'.
```

```js
import { getByAltText } from '@testing-library/dom';

const container = document.body;
const incrediblesPosterImg = getByAltText(container, /incredibles.*? poster/i); // return the element (normally an <img>) that has the given alt text. It only supports elements which accept an alt attribute.
```

For full list of available queries check the [documentation](https://testing-library.com/docs/dom-testing-library/api-queries).
