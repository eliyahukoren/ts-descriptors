import {LogMethod, ValidateNumbers} from './decorators';

class MathOperations {
  @LogMethod
  @ValidateNumbers
  add(a: number, b: number): number {
    return a + b;
  }
}

const math = new MathOperations();

try{
  console.log(math.add(2, 3));
  //@ts-ignore
  
  console.log(math.add('1' as any, 3));
  
}catch(e: any){
  console.log(e?.message)
}
