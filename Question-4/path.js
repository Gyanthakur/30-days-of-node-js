const path = require('path');

function resolvePath(relativePath) {
  try {
    // Resolve the relative path to an absolute path using path.resolve()
    const resolvedPath = path.resolve(relativePath);

    // Print the resolved path to the console
    console.log(`Resolved Path: ${resolvedPath}`);
  } catch (error) {
    console.error(`Error resolving path: ${error.message}`);
  }
}

// Test cases
resolvePath('../project/folder/file.txt');
resolvePath('nonexistent-folder/file.txt');
