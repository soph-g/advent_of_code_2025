import path from 'node:path';
import { readFileSync } from 'node:fs';

function filePath(day, test) {
  const fileName = test ? 'test' : 'input';

  return path.join('inputs', day, `${fileName}.txt`);
}

export function readFile(day, test = false) {
  return readFileSync(
    filePath(day, test), 
    'UTF8'
  ).split('\n');
}


