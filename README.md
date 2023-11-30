# encryptor-decryptor
Encryptor and Decryptor

This JavaScript tool offers encryption and decryption functions to secure and decode strings using a custom encryption algorithm. The repository contains modules for encryption, decryption, and built-in test cases to verify the functionality.

# Features:

Encrypt & Decrypt: Utilize the encrypt and decrypt functions to encrypt text with a generated key and decrypt the encrypted content back to its original form.
Test Suite: Includes an extensive set of predefined test cases to verify the correctness of encryption and decryption operations.
Customizable Keys: Generates random keys for encryption, ensuring each encryption is unique.

# Packability and Usability
the code comes with 4 main functions. Each fuction serves it's own important feauture, two of which are critical and 2 being optional.
The 2 critical functions are **encrypt()** and **decrypt()**.
Both functions take 2 parameters, the input string and the encryption key. 
The input string for the **encrypt()** function is a regular string, while the input string for the **decrypt()** function is the encrypted key that was returned by the encrypt function.

In both functions you must pass the encryption key. This key can be anything, as long as between a encryption - decryption pair the key is remain the same, as the function else returns a different decrypted value.

One of the 2 optional functions is the **generateKey()** command which creates a random 20-length string of numerical characters for you. This is easier and safer for you to use instead of creating your own keys. 
The key must be consisting of only NUMERICAL values. This is because the keys are parted and individually parsed to change the ascii values of the characters of the input string. Future updates might involve the use of non-numerical keys as well, but this has been postponed until further notice.

The last feature that is packed within this repository is the **testEncryptionDecryption()**, which is a function that packs 10 test cases and test the encryption/decryption to see if some testcase returned wrong results.
This tester has great logging and shows you exactly what is wrong by showing what it expected and what it received.

# Example usage
```js
const { encrypt, decrypt } = require("./encryptor");

const key = generateKey(); // Generate a safe encryption key
const encrypted = encrypt("Sample text to encrypt", key); // Encrypt the text given the key
const decrypted = decrypt(encrypted, key); // Decrypt the encrypted text given the key

console.log("Encrypted:", encrypted);
console.log("Decrypted:", decrypted);

```
