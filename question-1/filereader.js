const fs = require('fs');

function readFileContent(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log('File Content:', data);
        resolve(data);
      }
    });
  });
}

// Test cases
readFileContent('question-1/test-files/file1.txt')
  .then(() => console.log('File 1 read successfully'))
  .catch(err => console.error('Error reading file 1:', err));

readFileContent('question-1/test-files/empty-file.txt')
  .then(() => console.log('Empty file read successfully'))
  .catch(err => console.error('Error reading empty file:', err));

readFileContent('question-1/test-files/nonexistent-file.txt')
  .then(() => console.log('Nonexistent file read successfully'))
  .catch(err => console.error('Error reading nonexistent file:', err));

