const fs = require("fs-extra");
const path = require("path");
const osenv = require("osenv");

export function getUsersHomeFolder() {
  return osenv.home();
}

export const mkdir = (filepath: string) => {
  if (!fs.existsSync(filepath)) {
    const prevPath = filepath.split(path.sep).slice(0, -1).join(path.sep);
    mkdir(prevPath);
    fs.mkdirSync(filepath);
  }
};

/**
 * Test whether or not the given path exists.
 *
 * @param {string} p The path to the file or directory.
 * @returns {boolean}
 */
export const exists = async (p: string): Promise<boolean> => {
  // Nodes fs.exists is deprecated.
  try {
    await fs.access(p);
    return true;
  } catch (_) {
    return false;
  }
};

/**
 * Returns true if the path is a directory with read access.
 *
 * @param {string} dirPath The directory path.
 */
export const isDirectory = (dirPath: string): boolean => {
  try {
    return fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory();
  } catch (_) {
    return false;
  }
};

/**
 * Returns true if the path is a file with read access.
 *
 * @param {string} filepath The file path.
 */
export const isFile = (filepath: string): boolean => {
  try {
    return fs.existsSync(filepath) && fs.lstatSync(filepath).isFile();
  } catch (_) {
    return false;
  }
};
