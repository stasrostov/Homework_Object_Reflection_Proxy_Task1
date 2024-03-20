import { httpGet, httpPost } from '../http';

describe('httpGet function', () => {
  it('should throw an error with the provided URL', () => {
    const url = 'http://example.com';
    expect(() => httpGet(url)).toThrowError(url);
  });
});

describe('httpPost function', () => {
  it('should throw an error with the provided URL', () => {
    const url = 'http://example.com';
    expect(() => httpPost(url)).toThrowError(url);
  });
});
