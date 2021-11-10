A React hook to copy content to clipboard.

## Installation

Using `npm`:

```sh
npm install --save praveen-hooks--use-clipboard

```

Using `yarn`:

```sh
yarn add praveen-hooks--use-clipboard

```

## Basic usage

The `useClipboard()` hook, similarly to the `useState()` hook, returns an array of two elements:

- the first element is a boolean indicating the copied text status. Eg: isCopied: true| false
- the second element is function which can be called with a value that will be copied to the clipboard

```jsx
import React from "react";
import useClipboard from "praveen-hooks--use-clipboard";

const CopyToClipBoardButton = (text) => {
  let resetInterval = 3000; //copied status reset interval in milliseconds
  const [isCopied, copyToClipboard] = useClipboard(resetInterval);
  const toClipboard = "Example Text";

  return (
    <button onClick={() => copyToClipboard(text)}>
      {isCopied ? "Copied!!" : "Copy to Clipboard"}
    </button>
  );
};
```
