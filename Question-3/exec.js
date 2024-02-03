const { exec } = require('child_process');

function executeCommand(command) {

  exec(command, (error, stdout, stderr) => {


    if (error) {
      console.error(`Command failed: ${error.message}`);
      return; 
    }

    console.log('Command Output:');
    console.log(stdout); 
  });
}

executeCommand('ls -la');
executeCommand('echo "Hello, Node.js!"');
