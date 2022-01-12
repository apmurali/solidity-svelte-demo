const hello = artifacts.require("hello");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("hello", function (/* accounts */) {
  it("should assert true", async function () {
    await hello.deployed();
    return assert.isTrue(true);
  });
});
