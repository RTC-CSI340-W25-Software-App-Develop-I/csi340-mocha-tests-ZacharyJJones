// Importing the Chai library to use its assert method, which offers more features than the built-in Node.js assertions
import { assert } from "chai";
//We are importing our Functions from src/index.js
import {
	helloWorld,
	addition,
	subtraction,
	multiplication,
	division,
	remainder,
	exponentiation,
} from "../src/index.js";

describe("Helloworld Function", () => {
	it("Should return a string", () => {
		const result = helloWorld();
		assert.typeOf(
			result,
			"string",
			"the method is expected to return a string"
		);
	});

	it("Should return 'Hello World'", () => {
		const result = helloWorld();
		assert.equal(result, "Hello World", "Return value should be 'Hello World'");
	});
});

describe("Addition Function", () => {
	it("Should add two numbers", () => {
		const result = addition(5, 10);
		assert.equal(result, 15, "5 + 10 should equal 15");
	});
});

describe("Subtraction Function", () => {
	it("Should subtract two numbers", () => {
		const result = subtraction(5, 10);
		assert.equal(result, -5, "5 - 10 should equal -5");
	});
});

describe("Multiplication Function", () => {
	it("Should multiply two numbers", () => {
		const result = multiplication(5, 10);
		assert.equal(result, 50, "5 x 10 should equal 50");
	});
});

describe("Division Function", () => {
	it("Should divide two numbers", () => {
		const result = division(5, 10);
		assert.equal(result, 0.5, "5 / 10 should equal 0.5");
	});
});

describe("Remainder Function", () => {
	it("Should give the remainder of division for two numbers", () => {
		const result = remainder(5, 10);
		assert.equal(result, 5, "5 modulo 10 should equal 5");
	});
});

describe("Exponentiation Function", () => {
	it("Should exponentiate two numbers", () => {
		const result = exponentiation(5, 10);
		assert.equal(result, 9765625, "5 ^ 10 should equal 9,765,625");
	});
});
