import { Session } from './Session';

test('Session exported correctly', () => {
  expect(Session).toBeTruthy();
});

test('Session can instant', () => {
  expect(new Session()).toBeTruthy();
});
