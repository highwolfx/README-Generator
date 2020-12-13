# README Generator
![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This is a NodeJS based project that generates README markdown files from a user input via command line.


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)


## Installation

Download, clone, or fork the repo and run an `npm install` command in the folder directory. This will install the dependencies needed for NodeJS to run the application as listed in `package.json`.

 * [`inquirer`](https://www.npmjs.com/package/inquirer) allows the application to prompt the user for inputs on the command line.

To start the application, run `node index.js` on the command line.

<p align="center">
    <img alt="GIF of GUI" src="https://raw.githubusercontent.com/highwolfx/README-Generator/main/assets/GUI.gif">
</p>


  

## Usage

To start the application, run `node index.js` on the command line. After, follow the instructions displayed on the prompt. The prompts that start with "If applicable" can be left empty, and the README file generated will update to reflect it.

`Note that the first 4 prompts (username, email, project title, and project description) are required and will not accept a blank answer.`

After inputting the required information, the last option would be to choose a license, in which the arrow up and down keys can be used to navigate the list.

Once all the required information has been inputted, the generated README file will be generated in the `OutputREADME.md` file.

A video tutorial for this can be found [here](https://youtu.be/o38CbjmZzfk) or the `Tutorial.mp4` file in the `assets` folder.

## License

Licensed under the [MIT](LICENSE.txt) license.


## Credits
Base development files were provided by the [UCSD Coding Bootcamp](https://bootcamp.extension.ucsd.edu/coding/).

The package `inquirer` for NodeJS can be found [here](https://www.npmjs.com/package/inquirer).

The package `util` for NodeJS can be found [here](https://www.npmjs.com/package/util).


## Questions
GitHub: [highwolfx](https://github.com/highwolfx/)

Email: seanchangx@gmail.com