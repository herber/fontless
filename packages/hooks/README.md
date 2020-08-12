# Fontless Hooks

The hooks used by [Varld Fontless](https://github.com/varld/fontless).

## Install

```bash
npm install @varld/fontless-hooks

# yarn
yarn add @varld/fontless-hooks
```

## Usage

### `useQuery`

The `useQuery`-hook is a small wrapper around the [Next.js](https://github.com/vercel/next.js) router, to easily extract a query parameter.

```javascript
import { useQuery } from '@varld/fontless-hooks';

// replace `key` with the parameter you want to get
let value = useQuery('key');
```

### `useScroll`

The `useScroll`-hook can be used to get the window's horizontal and vertical scroll value. It updates when the user scrolls.

```javascript
import { useScroll } from '@varld/fontless-hooks';

let { x, y } = useScroll(');
```

### `useSize`

The `useSize`-hook can be used to get the size of the browser window. It updates when window is resized.

```javascript
import { useSize } from '@varld/fontless-hooks';

let { height, width } = useSize(');
```

## License

**Powered by [Varld](https://varld.co)**

[MIT](https://github.com/varld/fontless/blob/master/LICENSE) © [Tobias Herber](https://herber.space)
