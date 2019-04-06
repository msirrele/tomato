import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Tomato} from '../models';
import {TomatoRepository} from '../repositories';

export class TomatoController {
  constructor(
    @repository(TomatoRepository)
    public tomatoRepository : TomatoRepository,
  ) {}

  @post('/tomatoes', {
    responses: {
      '200': {
        description: 'Tomato model instance',
        content: {'application/json': {schema: {'x-ts-type': Tomato}}},
      },
    },
  })
  async create(@requestBody() tomato: Tomato): Promise<Tomato> {
    return await this.tomatoRepository.create(tomato);
  }

  @get('/tomatoes/count', {
    responses: {
      '200': {
        description: 'Tomato model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Tomato)) where?: Where,
  ): Promise<Count> {
    return await this.tomatoRepository.count(where);
  }

  @get('/tomatoes', {
    responses: {
      '200': {
        description: 'Array of Tomato model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Tomato}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Tomato)) filter?: Filter,
  ): Promise<Tomato[]> {
    return await this.tomatoRepository.find(filter);
  }

  @patch('/tomatoes', {
    responses: {
      '200': {
        description: 'Tomato PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() tomato: Tomato,
    @param.query.object('where', getWhereSchemaFor(Tomato)) where?: Where,
  ): Promise<Count> {
    return await this.tomatoRepository.updateAll(tomato, where);
  }

  @get('/tomatoes/{id}', {
    responses: {
      '200': {
        description: 'Tomato model instance',
        content: {'application/json': {schema: {'x-ts-type': Tomato}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Tomato> {
    return await this.tomatoRepository.findById(id);
  }

  @patch('/tomatoes/{id}', {
    responses: {
      '204': {
        description: 'Tomato PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() tomato: Tomato,
  ): Promise<void> {
    await this.tomatoRepository.updateById(id, tomato);
  }

  @put('/tomatoes/{id}', {
    responses: {
      '204': {
        description: 'Tomato PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tomato: Tomato,
  ): Promise<void> {
    await this.tomatoRepository.replaceById(id, tomato);
  }

  @del('/tomatoes/{id}', {
    responses: {
      '204': {
        description: 'Tomato DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tomatoRepository.deleteById(id);
  }
}
