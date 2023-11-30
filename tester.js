const { generateKey, getTestCases } = require("./tools");
const { encrypt, decrypt } = require("./encryptor");

function testEncryptionDecryption() {
  const testCases = getTestCases();
  let successful = true;
  testCases.forEach((testCase) => {
    const key = generateKey();
    const encrypted = encrypt(testCase, key);
    const decrypted = decrypt(encrypted, key);
    if (testCase !== decrypted) {
      console.log(
        `[x] False! Expected:\n\n${testCase}\n\nbut received:\n\n${decrypted}\n-------------------------------\n`
      );
      successful = false;
    }
  });

  if (successful)
    console.log("[x] Test Completed\nAll cases passed successfully");
  if (!successful)
    console.log("[x] Test Failed\n, Not all cases passed successfully");
}

testEncryptionDecryption();
