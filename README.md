# skylark-utils-stream
The stream features enhancement for skylark utils.

## Dependences

| Project                                                      | Status | Description                           |
| ------------------------------------------------------------ | ------ | ------------------------------------- |
| [skylark-langx](https://github.com/skylarklangx/skylark-langx) |        | Javascript language extension library |
| [skylark-utils](https://github.com/skylarkutils/skylark-utils) |        | An Universal HTML5 Javascript Library |
| [skylark-utils-dom](https://github.com/skylarkutils/skylark-utils-dom) |        | An Universal DOM Utility Library      |

## Different builds

builds are in the directory dist.

|                      | build                                    | Description              |
| -------------------- | ---------------------------------------- | ------------------------ |
| full                 | skylark-utils-stream-all.js              | included dependences     |
| only                 | skylark-utils-stream.js                  | not included dependences |
| full （development） | uncompressed/skylark-utils-stream-all.js | included dependences     |
| only （development） | uncompressed/skylark-utils-stream.js     | not included dependences |

Please use the "full" version when using this library alone, and use the "only" version when using other skylark libraries.

## Installation

You can get the latest version in many different ways:

- Downloading [a ZIP file from master](https://github.com/skylarkutils/skylark-utils-stream/archive/master.zip)
- Cloning using Git: `git clone https://github.com/skylarkutils/skylark-utils-stream.git`
- Installing via NPM: `npm install https://github.com/skylarkutils/skylark-utils-stream.git#master --save`

## Building 

- Ensure that Node.js is installed.
- Run npm install https://github.com/skylarkjs/skylark-bundle-cli.git -g to ensure sbundle is installed.
- Run npm install to ensure the required dependencies are installed.
- Run npm run build. The builds will be placed in the dist/ directory.

## License

Released under the [MIT](http://opensource.org/licenses/MIT)