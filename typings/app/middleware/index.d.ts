// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportJwtErr = require('../../../app/middleware/jwtErr');

declare module 'egg' {
  interface IMiddleware {
    jwtErr: typeof ExportJwtErr;
  }
}
