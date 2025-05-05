/**
 * Converts a given string to Title Case.
 * Each word in the string will have its first character capitalized,
 * and the rest of the characters will be in lowercase.
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} - The transformed string in Title Case.
 */
export const toTitleCase = (str) => {
    return str
      .toLowerCase() 
      .split(' ') 
      .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1) // Capitalize the first letter of each word
      )
      .join(' ');
  };
  