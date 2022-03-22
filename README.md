# JS Homework
[CHANGELOG](CHANGELOG.md)
[ROADMAP](ROADMAP.md)

## How to use

1. NodeJS >=17
2. `npm install`
3. `npm test`

### How to run only one test suite

There's a lot of tests and all of them are red on the beginning :-)
Here's a tip how to run only tests you needed(only one or maybe only tests for current task):
 1. You should find a test suite file for needed task
 2. In file you should find a test/s to run
 3. Both `describe` and `it` method has `*.only` method, so to run only needed test code should be fixed in the next way:
    * `describe(<>)` should be `describe.only(<>)` - in this case system will run only tests in this describe
    * `it(<>)` should be `it.only(<>)` - in this case system will run only this test
 
#### Good Luck :-)
