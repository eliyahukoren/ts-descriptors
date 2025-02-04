import {LogFunction} from './decorators';

const sum = LogFunction(function (a: number, b: number) {
  return a + b;
});

console.log(sum(3, 7));
