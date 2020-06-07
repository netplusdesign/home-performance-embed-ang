# home-performance-embed-ang

Simple app to load date from [home-performance-flask-api](https://github.com/netplusdesign/home-performance-flask-api) and present it in tables for use on my [uphillhouse](uphillhouse.com) blog.

Used this as an opportunity to learn more about Typescript and Angular.

There's also a [simple](https://github.com/netplusdesign/home-performance-embed-simple) version.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

First get Node. Then clone this repo and run: `npm install`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

I'm running the app in a sub-folder, so I run `ng build --base-href ./`.

## Running unit tests

No unit tests yet. You can run the default tests which will all fail.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

I'm running a Vagrant box so tests are run headless using xvfb. But once again, no e2e tests.

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
