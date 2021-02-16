import {get} from '@loopback/rest';

export class HelloController {
  @get('/hello')
  hello(): string {
    return 'Hello world!';
  }
}


export class TestController {
  @get('/test')
  test(): string {
    return 'Test world!';
  }
}
