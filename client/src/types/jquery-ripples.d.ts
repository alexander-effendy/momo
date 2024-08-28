import * as JQuery from 'jquery';

declare module 'jquery' {
  interface JQuery {
    ripples(options?: any): JQuery;
    ripples(method: string, ...args: any[]): JQuery;
  }
}