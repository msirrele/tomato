import {Entity, model, property} from '@loopback/repository';

@model()
export class Account extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'string',
  })
  password?: string;

  @property({
    type: 'string',
  })
  username?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'date',
  })
  created?: string;

  @property({
    type: 'date',
  })
  updated?: string;


  constructor(data?: Partial<Account>) {
    super(data);
  }
}
