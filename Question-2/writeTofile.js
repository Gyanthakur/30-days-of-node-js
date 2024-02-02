const fs = require('fs'); // Import the fs module for file system operations

function writeToFile(filePath, content) {
  // Asynchronously write content to the specified file
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error('Error writing to file:', err); // Handle any errors
    } else {
      console.log('Data written to', filePath); // Log success message
    }
  });
}

// Test cases
writeToFile('test-files/output1.txt', 'Sample content.');
writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
