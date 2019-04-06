import {Entity, model, property} from '@loopback/repository';

@model()
export class Tomato extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id: string;

  @property({
    type: 'string',
  })
  _account?: string;

  @property({
    type: 'string',
  })
  _category?: string;

  @property({
    type: 'string',
  })
  note?: string;

  @property({
    type: 'date',
  })
  start?: string;

  @property({
    type: 'date',
  })
  end?: string;

  constructor(data?: Partial<Tomato>) {
    super(data);
  }
}
