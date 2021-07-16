# PHN Validator

This package provides a simple validator for British Columbia provincial health numbers.
The validation follows the process on page 23 of
[this document](https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/software-development-guidelines/vol-4b-application-rules-client-registry.pdf)

## Installation

Install my-project with npm

```bash
  npm i phn-validator
```

Or yarn

```bash
  yarn add phn-validator
```

## Usage/Examples

```typescript
import { phnValidator } from 'phn-validator';

phnValidator(123); // false
phnValidator(0123456789); // false
phnValidator(9260784079); // true
```
