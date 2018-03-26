// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import * as fs from 'fs';
import * as child_process from 'child_process';
import * as path from 'path';

var child: child_process.ChildProcess;

before(function (done) {
  var started = false;
  var out = fs.openSync(path.join(__dirname, 'server.log'), 'w');
  fs.writeSync(out, 'Test run started at ' + new Date().toISOString() + '\n');
  child = child_process.spawn("npm", ['run', 'start-test-server']);

  child.stdout.on('data', function (data: Buffer) {
    fs.writeSync(out, data.toString('UTF-8'));
    if (data.toString().indexOf('started') > 0) {
      started = true;
      done();
    }
  });

  child.stderr.on('data', (data) => {
    const dataString = data.toString();
    fs.writeSync(out, dataString);
    if (!started) {
      console.warn(dataString);
      started = true;
      done();
    }
  });

  child.on("close", (code, signal) => {
    fs.closeSync(out);
    if (!started) {
      done();
    }
  });
});

after(async function () {
  child.kill();
});
