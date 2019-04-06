import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './dblocal.datasource.json';

export class DblocalDataSource extends juggler.DataSource {
  static dataSourceName = 'dblocal';

  constructor(
    @inject('datasources.config.dblocal', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
