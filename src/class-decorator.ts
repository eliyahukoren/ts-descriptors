import {Controller, LogMethod} from './decorators';


@Controller
class User {
  constructor(public name: string) {}
  
  @LogMethod
  someAsMine(n: number, name: string){
    console.log(`call db`)
  }
}

const user = new User("John");
user.someAsMine(1, 'str');
