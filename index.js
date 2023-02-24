
const PythonShell = require('python-shell').PythonShell;

var options = {
  mode: 'text',
  pythonPath: '/usr/bin/python',
  pythonOptions: ['-u'],
  scriptPath: 'src',
  args: ['--max_conn=10', '--buffer_size=8192']
};

PythonShell.run('server.py', options, function (err, results) {
  if (err)
    throw err;
  // Results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});