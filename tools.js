function generateKey() {
  string = "";
  for (let i = 0; i < 20; i++) {
    string += Math.floor(Math.random() * 1000);
  }
  return string;
}

function getTestCases() {
  let testCases = [];
  testCases.push("hey this is a test! This is a long test as well....");
  testCases.push(
    "I have 3 cars, kdsh9o3 owh no!! ds9gu93t0pogjp  [2pgkwpnsb]... sorry my cat walked over my keyboard.."
  );
  testCases.push(
    "It is important THAT WE TEST, all possible. c a s e s to check whether our code works like it should!?!?"
  );
  testCases.push(
    "I am Getting tired of writing these test cases myself, so i am going to create some lorem ipsum content. Anyone got a problem with that? Owh wait.. it is not in production yet so i am technically talking to myself."
  );
  testCases.push(
    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
  );
  testCases.push(
    `@!#$%^&*(), At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`
  );
  testCases.push(
    `@!#$%^&*(), At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore`
  );
  testCases.push(
    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  );
  return testCases;
}
module.exports = { generateKey, getTestCases };
