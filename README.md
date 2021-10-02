# Use Localstorage

A React hook for efficiently accessing access local storage.

## Install

```bash
# yarn
yarn add @weekrise/use-localstorage

# npm
npm install --save @weekrise/use-localstorage
```

## Usage

The data is serialized to JSON which means that you can store numbers, strings, 
objects, arrays or anything else that can be passed to `JSON.stringify`.

```jsx
import createLocalstorageState from '@weekrise/use-localstorage';

let useLocalstorage = createLocalstorageState('key-name', 3);

let App = () => {
  let [count, setCount] = useLocalstorage();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
```

### Usage with Typescript

```jsx
import createLocalstorageState from '@weekrise/use-localstorage';

let useLocalstorage = createLocalstorageState<{
  name: string;
  email: string;
}>('key-name', { name: '...', email: '...' });

let App = () => {
  let [data, setData] = useLocalstorage();

  // use data ...
}
```

## License

MIT © [Tobias Herber](https://github.com/herber)
