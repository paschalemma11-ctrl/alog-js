// ────────────────────────────────────────────────
// STRING MANIPULATION FUNCTIONS
// ────────────────────────────────────────────────

/**
 * Reverses the given string.
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 */
function reverseString(str) {
    // Method 1: most readable
    return str.split('').reverse().join('');
    
    // Alternative one-liners:
    // return [...str].reverse().join('');
    // return str.split('').reduce((rev, char) => char + rev, '');
}

/**
 * Counts the number of characters in a string (including spaces).
 * @param {string} str - The input string
 * @returns {number} The character count
 */
function countCharacters(str) {
    return str.length;
    // Alternative: return [...str].length;  // handles emojis correctly
}

/**
 * Capitalizes the first letter of each word in a sentence.
 * @param {string} sentence - The input sentence
 * @returns {string} Sentence with each word capitalized
 */
function capitalizeWords(sentence) {
    return sentence
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// ────────────────────────────────────────────────
// ARRAY FUNCTIONS
// ────────────────────────────────────────────────

/**
 * Finds the maximum value in an array of numbers.
 * @param {number[]} arr - Array of numbers
 * @returns {number} The maximum value
 */
function findMax(arr) {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
    // Alternative: return arr.reduce((max, num) => Math.max(max, num), -Infinity);
}

/**
 * Finds the minimum value in an array of numbers.
 * @param {number[]} arr - Array of numbers
 * @returns {number} The minimum value
 */
function findMin(arr) {
    if (arr.length === 0) return undefined;
    return Math.min(...arr);
    // Alternative: return arr.reduce((min, num) => Math.min(min, num), Infinity);
}

/**
 * Calculates the sum of all numbers in an array.
 * @param {number[]} arr - Array of numbers
 * @returns {number} The sum
 */
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
    // Alternative: let sum = 0; for (let n of arr) sum += n; return sum;
}

/**
 * Filters an array based on a given condition (callback).
 * @param {any[]} arr - Input array
 * @param {function} condition - Callback that returns true to keep the element
 * @returns {any[]} New filtered array
 */
function filterArray(arr, condition) {
    return arr.filter(condition);
    // Example usage: filterArray([1,2,3,4,5], n => n % 2 === 0) → [2,4]
}

// ────────────────────────────────────────────────
// MATHEMATICAL FUNCTIONS
// ────────────────────────────────────────────────

/**
 * Calculates the factorial of a non-negative integer.
 * @param {number} n - Non-negative integer
 * @returns {number} n!
 */
function factorial(n) {
    if (n < 0) return undefined;           // or throw error
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
    
    // Recursive version (less efficient for large n):
    // return n === 0 || n === 1 ? 1 : n * factorial(n - 1);
}

/**
 * Checks if a number is prime.
 * @param {number} num - Number to check
 * @returns {boolean} true if prime, false otherwise
 */
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    // Check divisors up to sqrt(num)
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

/**
 * Generates the Fibonacci sequence up to the given number of terms.
 * @param {number} terms - How many numbers to generate (must be ≥ 0)
 * @returns {number[]} Array containing the Fibonacci sequence
 */
function fibonacci(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    if (terms === 2) return [0, 1];
    
    const sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}