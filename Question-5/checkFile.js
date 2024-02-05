const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
  // 1. Extract the actual file extension using path.extname():
  const actualExtension = path.extname(filePath);

  // 2. Compare the actual extension with the expected extension:
  if (actualExtension === expectedExtension) {
    console.log(`File has the expected extension: ${expectedExtension}`);
  } else {
    console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${actualExtension}`);
  }
}

// Test cases:
checkFileExtension('test-files/file1.txt', '.txt');
checkFileExtension('test-files/image.png', '.jpg');
