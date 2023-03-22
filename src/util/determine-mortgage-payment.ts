import ToNearestPenny from './to-nearest-penny';

interface MortgageAttributes {
  homePrice: number;
  downPayment: number;
  interestRate: number;
  months: number;
}

/**
 *
 * This mortgage Calculation is based on:
 * 
 * M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]. 

Here’s a breakdown of each of the variables:

M = Total monthly payment
P = The total amount of your loan
I = Your interest rate, as a monthly percentage
N = The total amount of months in your timeline for paying off your mortgage
 */
const DetermineMortgagePayment = (attributes: MortgageAttributes): number => {
  const { homePrice, downPayment, interestRate, months } = attributes;

  const PRINCIPAL = homePrice - downPayment;
  const MONTHLY_INTEREST = interestRate / 12;

  const INTEREST_FACTOR = Math.pow(1 + MONTHLY_INTEREST, months);

  const MONTHLY_PAYMENT =
    (PRINCIPAL * (MONTHLY_INTEREST * INTEREST_FACTOR)) / (INTEREST_FACTOR - 1);

  return ToNearestPenny(MONTHLY_PAYMENT);
};

export default DetermineMortgagePayment;
