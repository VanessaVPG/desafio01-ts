import { CompanyAccount } from './class/CompanyAccount'
import { NewTypeOfAccount } from './class/NewTypeOfAccount'
import { PeopleAccount } from './class/PeopleAccount'


const companyAccount = new CompanyAccount('Company Account', 123456)

const newTypeOfAccount = new NewTypeOfAccount('New Type of Account', 654321)

const peopleAccount = new PeopleAccount(123456789, 'People Account', 987654)

companyAccount.deposit(100)
companyAccount.withdraw(50)
companyAccount.getBalance()
companyAccount.getLoan(1000)
companyAccount.getBalance()

newTypeOfAccount.deposit(100)
newTypeOfAccount.withdraw(50)
newTypeOfAccount.getBalance()


peopleAccount.deposit(100)
peopleAccount.withdraw(50)
peopleAccount.getBalance()