import {Entity, model, property} from '@loopback/repository';

@model()
export class Category extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  _id: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  _account?: string;

  @property({
    type: 'date',
  })
  created?: string;

  @property({
    type: 'date',
  })
  updated?: string;


  constructor(data?: Partial<Category>) {
    super(data);
  }
}
