## Project Overview 

This is architecture of Frontend and backend. Frontend technology is used Angular with typescript. Backend technology is NodeJS with Express with typescript.

Unit testing framework is jest and test case is written for both application

## Prerequisite

- NodeJS: 14.17.6 [Click here for releases](https://nodejs.org/en/download/releases/)
- Angular CLI: 12.2.7 [Click here for releases](https://angular.io/guide/setup-local)
- Jest: 27.2.2 [Click here for releases](https://jestjs.io/versions)
- Unit testing configuration documents available on root level of this project so check this out for more details [Configure_UnitTesting.docx]()

## Configure Database in Local Machine
- Open SQL Server Management Studio. Run the `testdbbackup.sql` script file to create a database in the local machine. Set username, password and server details under the `dbConfig.ts` file.

## Running the project with angular + NodeJS

Run `npm run start-both` for a local server. Navigate to [localhost:4000](http://localhost:4000/)

Note: if you change any of the source files you need to execute the above command.

## Running unit tests

Run `npm run test` to execute the unit tests via [jest](https://jestjs.io/).