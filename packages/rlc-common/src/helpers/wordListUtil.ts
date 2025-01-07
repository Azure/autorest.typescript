import * as fs from 'fs';

const dictionary = new Set(fs.readFileSync('./wordList.txt', 'utf8').split(/[\r\n]+/));

/**
 * Check if a word is valid, true if it is in the dictionary
 * @param word 
 * @returns boolean
 */
export function isValidWord(word: string = ""): boolean {
    return dictionary.has(word.toLowerCase());
}
