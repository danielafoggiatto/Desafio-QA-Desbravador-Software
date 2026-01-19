import LoginPage from '../pages/LoginPage';

declare module '@cucumber/cucumber' {
  interface World {
    loginPage: LoginPage;
  }
}
