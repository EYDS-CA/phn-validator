/**
 * Implemenation of BC PHN checksum algorithm:
 * https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/software-development-guidelines/vol-4b-application-rules-client-registry.pdf
 * Page 25, 26
 */
declare const DIGIT_WEIGHTS: number[];
declare const VALID_LENGTH = 10;
declare const VALID_FIRST_DIGIT = "9";
declare function getWeightedDigits(digits: number[], weights: number[]): number[];
declare function getWeightedDigitSum(digits: number[]): number;
declare function phnValidator(phn?: string | null): boolean;
