export default class PrimeFactorisation {

    constructor() {
        this.currentPrimeNumber = 2;
        this.basePrimeNumber = 2;
        this.currentNumber = undefined;
        this.result = '';
        this.foundSolution = false;
    }

    /**
     * Get result of the calculation
     * @returns {string}
     */
    getResult() {
        if (this.currentNumber === undefined) this.onErr('Set a number first');
        return this.result;
    }

    /**
     * Set a number for the calculation
     * @param num
     */
    setNumber(num) {
        this.currentNumber = num;
        this.loop();
    }

    /**
     * Check where ever the number is prime
     * @param num
     * @returns {boolean}
     */
    isPrime(num) {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    /**
     * Divide the number by the current prime number
     * then check where ever its a whole number or not
     * @param num
     * @returns {boolean}
     */
    primeFactorisation(num) {
        return (num / this.currentPrimeNumber) % 1 === 0;
    }

    /**
     * Keep looping until the solution is found
     * First check of the number is actual a number and of the number is set
     * Check when ever the number is prime > then we have solution
     * check is its possible to make divide the number and get to see if its whole and check if the number is prime
     * if its not prime or a whole number then add 1 number to currentPrimeNumber if the number is not prime and re loop
     * last step get the result add the result to the current result and set the currentPrimeNumber to the basePrimeNumber
     * then re loop
     */
    loop() {
        while (!this.foundSolution) {
            if (isNaN(this.currentNumber) || this.currentNumber === undefined) {
                this.onErr('Not a number');
                break;
            }
            if (this.isPrime(this.currentNumber)) {
                this.result += this.currentNumber;
                this.foundSolution = true;
                break;
            } else if (this.primeFactorisation(this.currentNumber) === false && this.isPrime(this.currentPrimeNumber)) this.currentPrimeNumber++;
            else {
                this.currentNumber = this.currentNumber / this.currentPrimeNumber;
                this.result += this.currentPrimeNumber + 'x';
                this.currentPrimeNumber = this.basePrimeNumber;
            }
        }
    }

    /**
     * Display errors
     * @param err
     * @returns {*}
     */
    onErr(err) {
        return err;
    }
}

// const test = new PrimeFactorisation();
// test.setNumber(204);
// console.log(test.getResult());
