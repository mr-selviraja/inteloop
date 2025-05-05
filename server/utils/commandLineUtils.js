import readline from 'readline';

/**
 * Prompts the user for input via the terminal.
 * @param {string} query - The prompt message to display
 * @returns {Promise<string>} - Resolves with the user's input
 */
export const promptInput = (query) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
  
    return new Promise((resolve) =>
        rl.question(query, (answer) => {
            rl.close();
            resolve(answer);
        })
    );
};