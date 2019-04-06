import {DefaultCrudRepository} from '@loopback/repository';
import {Category} from '../models';
import {DblocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype._id
> {
  constructor(
    @inject('datasources.dblocal') dataSource: DblocalDataSource,
  ) {
    super(Category, dataSource);
  }
}
