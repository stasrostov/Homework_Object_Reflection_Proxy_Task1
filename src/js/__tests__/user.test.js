import { loadUser, saveUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('loadUser should call httpGet with the correct URL and return parsed data', () => {
  const userData = { id: 1, name: 'John Doe', email: 'john@example.com' };
  const responseData = JSON.stringify(userData);
  const userId = 1;
  const expectedUrl = `http://server:8080/users/${userId}`;

  httpGet.mockReturnValue(responseData);

  const user = loadUser(userId);

  expect(httpGet).toHaveBeenCalledWith(expectedUrl);
  expect(user).toEqual(userData);
});

test('saveUser should throw an error with "Unimplemented"', () => {
  expect(() => saveUser()).toThrowError('Unimplemented');
});
