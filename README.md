# Weather Display

| Linux Build | License |
| ----------- | ------- |
| [![Build Status](https://img.shields.io/travis/brentpabst/wxdisplay.svg)](https://travis-ci.org/brentpabst/wxdisplay) | [![license](https://img.shields.io/github/license/brentpabst/wxdisplay.svg)](LICENSE) |

wxdisplay is an Angular2-based app.  The app displays current weather observation data from Weather Underground for a specific Personal Weather Station (PWS).  This also relies on weather cameras to display current imagery from the PWS.  You can use [wxcam](https://github.com/brentpabst/wxcam) to display the images.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
- nodejs (built with 8)
- npm
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone the repo & install dependencies

```
$ git clone https://github.com/brentpabst/wxdisplay.git
$ cd wxdisplay
$ npm i
```

### Running

```
$ ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/brentpabst/wxdisplay/tags). 

## Authors

* **Brent Pabst** - *Initial work* - [brentpabst](https://github.com/brentpabst)

See also the list of [contributors](https://github.com/brentpabst/wxdisplay/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
