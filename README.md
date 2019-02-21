# Cross-eval module
Package to emulate UNIX backticks in npm scripts.

## Installation
```sh
npm install --save cross-eval
```

## Usage
Create a npm script:
```javascript
"eval": "cross-eval aws ecr get-login --no-include-email"
```

## License
[MIT](https://github.com/alessiopcc/cross-eval/blob/master/LICENSE)

## Author
Alessio Paccoia <<alessio.paccoia@cubbit.io>>
