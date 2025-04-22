import 'axios';
import type { CookieJar } from 'tough-cookie';

declare module 'axios' {
  export interface AxiosRequestConfig {
    jar?: CookieJar;
  }
}