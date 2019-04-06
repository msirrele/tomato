import {DefaultCrudRepository} from '@loopback/repository';
import {Account} from '../models';
import {DblocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AccountRepository extends DefaultCrudRepository<
  Account,
  typeof Account.prototype._id
> {
  constructor(
    @inject('datasources.dblocal') dataSource: DblocalDataSource,
  ) {
    super(Account, dataSource);
  }
}
