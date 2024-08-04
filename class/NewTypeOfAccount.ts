import { DioAccount } from "./DioAccount";

export class NewTypeOfAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      const bonus = 10;
      const newValue = value + bonus;
      const currentBalance = this.getBalance();
      this.setBalance(currentBalance + newValue);
      console.log('Depósito de R$ ' + newValue + ' (incluindo bônus) realizado com sucesso!');
    }
  }
}
