import { httpServer } from './src/http_server';
import dotenv from 'dotenv';
import path from 'path';
import { __root } from './src/utils/root-path';

dotenv.config({ path: path.resolve(__root, '.env') });

const HTTP_PORT = process.env.PORT || 8181;

// eslint-disable-next-line no-console
console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
