/**
 * Implemenation of BC PHN checksum algorithm:
 * https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/software-development-guidelines/vol-4b-application-rules-client-registry.pdf
 * Page 25, 26
 */

const DIGIT_WEIGHTS = [2, 4, 8, 5, 10, 9, 7, 3];
const VALID_LENGTH = 10;
const VALID_FIRST_DIGIT = '9';

// Step 2
function getWeightedDigits(digits: number[], weights: number[]) {
  const weightedDigits = [];

  for (let i = 0; i < digits.length; i++) {
    const weightedDigit = (digits[i] * weights[i]) % 11;
    weightedDigits.push(weightedDigit);
  }

  return weightedDigits;
}

// Step 3
function getWeightedDigitSum(digits) {
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += digits[i];
  }

  return sum % 11;
}

export function phnValidator(phn: string): boolean {
  if (phn.length !== VALID_LENGTH) return false;

  if (isNaN(Number(phn))) return false;

  if (phn.charAt(0) !== VALID_FIRST_DIGIT) return false;

  // get the middle 8 digits and convert to numbers
  const digits = [...phn].slice(1, 9).map(digit => Number(digit));

  const weightedDigits = getWeightedDigits(digits, DIGIT_WEIGHTS);

  const sum = getWeightedDigitSum(weightedDigits);

  // Step 4
  const checkSum = 11 - sum;

  const lastDigit = Number(phn.charAt(VALID_LENGTH - 1));

  // Step 5
  return checkSum === lastDigit;
}
