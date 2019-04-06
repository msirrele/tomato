import {DefaultCrudRepository} from '@loopback/repository';
import {Tomato} from '../models';
import {DblocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TomatoRepository extends DefaultCrudRepository<
  Tomato,
  typeof Tomato.prototype._id
> {
  constructor(
    @inject('datasources.dblocal') dataSource: DblocalDataSource,
  ) {
    super(Tomato, dataSource);
  }
}
