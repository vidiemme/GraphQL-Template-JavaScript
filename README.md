# GraphQL API Template

Backend entry point for almost any project based on GraphQL

## Install

- Clone the project and change the name in `app/package.json`
- `cd app`
- `npm install`
- `npm start`

## Usage

The `server.js` is the entry point, here you can configure your server.
`ServerConstants.js` defines all the constants in your project.
The `api` folder contains all the API modules, all the routes are instantiated in the `APIConstants.js` file, each "route" should be added in a proper module.

A module is not just a single `Module.js`, but a bunch of files that compose the module itself. If you want to make a new module in a whistle, we suggest to install and use the [JS GraphQL Module Template](https://github.com/vidiemme/JS-GraphQL-Module-Template).

When you add and expose a new module (graphQL), just add it to the `APIConstants.js`, following the `Actor` example module.



# License

The MIT License

Copyright (c) 2019-2022 Vidiemme Consulting SRL https://vidiemme.it 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

