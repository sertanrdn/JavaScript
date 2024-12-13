import eurosFormatter from './euroFormatter.js';

class Wallet {
  #name;
  #cash;
  #dailyAllowance = 40;
  #dayTotalWithdrawals = 0;

  constructor(name, cash) {
    this.#name = name;
    this.#cash = cash;
  }

  get name() {
    return this.#name;
  }

  deposit(amount) {
    this.#cash += amount;
  }

  withdraw(amount) {
    if (this.#cash - amount < 0) {
      console.log(`Insufficient funds!`);
      return 0;
    }

    if (this.#dayTotalWithdrawals + amount > this.#dailyAllowance) {
      console.log(`Insufficient remaining daily allowance!`);
      return 0;
    }

    this.#cash -= amount;
    this.#dayTotalWithdrawals += amount;
    return amount;
  }

  transferInto(wallet, amount) {
    console.log(
      `Transferring ${eurosFormatter.format(amount)} from ${this.name} to ${
        wallet.name
      }`
    );
    const withdrawnAmount = this.withdraw(amount);
    wallet.deposit(withdrawnAmount);
  }

  resetDailyAllowance() {
    this.#dayTotalWithdrawals = 0;
    console.log(`Daily withdrawal has been reset`);
  }

  setDailyAllowance(newAllowance) {
    this.#dailyAllowance = newAllowance;
    console.log(`New daily allowance set to: ${eurosFormatter.format(newAllowance)}`);
  }

  reportBalance() {
    console.log(
      `Name: ${this.name}, balance: ${eurosFormatter.format(this.#cash)}`
    );
  }
}

function main() {
  const walletJack = new Wallet('Jack', 100);
  const walletJoe = new Wallet('Joe', 10);
  const walletJane = new Wallet('Jane', 20);

  walletJack.setDailyAllowance(50);
  walletJack.withdraw(30);
  walletJack.reportBalance();
  walletJack.transferInto(walletJoe, 50);
  walletJack.resetDailyAllowance();
  walletJack.withdraw(50);

  walletJane.deposit(20);
  walletJane.transferInto(walletJoe, 25);

  walletJack.reportBalance();
  walletJoe.reportBalance();
  walletJane.reportBalance();
}

main();
