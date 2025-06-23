/*

MIT License

Copyright (c) 2025 Imran Malik - Jalsonic Networks

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/


const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const base = BigInt(charset.length);
let counter = 0n;
let lastTime = 0n;

function toBase62(num) {
  let result = '';
  while (num > 0n) {
    result = charset[Number(num % base)] + result;
    num = num / base;
  }
  return result.padStart(10, 'a'); // Ensure length is at least 10 characters
}

function generateUniqueId() {
  const now = BigInt(Date.now());

  if (now !== lastTime) {
    lastTime = now;
    counter = 0n;
  } else {
    counter++;
  }

  // Multiplied by large number to spread IDs within the same millisecond
  const entropy = now * 10000000n + counter;
  return toBase62(entropy);
}



/*
oriid(): string
Returns a new unique 10-character alphanumeric string.

Details:
Type: Function
Returns: string – 10-character ID
Alphabet: a–z, A–Z, 0–9
Safe for: URLs, filenames, logs, offline use

*/

export function oriid() {
  return generateUniqueId();
}



export default oriid;