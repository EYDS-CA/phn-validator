/**
 * Implemenation of BC PHN checksum algorithm:
 * https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/software-development-guidelines/vol-4b-application-rules-client-registry.pdf
 * Page 25, 26
 */
export declare function phnValidator(phn?: string | null): boolean;
