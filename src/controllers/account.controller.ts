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
import {Account} from '../models';
import {AccountRepository} from '../repositories';

export class AccountController {
  constructor(
    @repository(AccountRepository)
    public accountRepository : AccountRepository,
  ) {}

  @post('/accounts', {
    responses: {
      '200': {
        description: 'Account model instance',
        content: {'application/json': {schema: {'x-ts-type': Account}}},
      },
    },
  })
  async create(@requestBody() account: Account): Promise<Account> {
    return await this.accountRepository.create(account);
  }

  @get('/accounts/count', {
    responses: {
      '200': {
        description: 'Account model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Account)) where?: Where,
  ): Promise<Count> {
    return await this.accountRepository.count(where);
  }

  @get('/accounts', {
    responses: {
      '200': {
        description: 'Array of Account model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Account}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Account)) filter?: Filter,
  ): Promise<Account[]> {
    return await this.accountRepository.find(filter);
  }

  @patch('/accounts', {
    responses: {
      '200': {
        description: 'Account PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() account: Account,
    @param.query.object('where', getWhereSchemaFor(Account)) where?: Where,
  ): Promise<Count> {
    return await this.accountRepository.updateAll(account, where);
  }

  @get('/accounts/{id}', {
    responses: {
      '200': {
        description: 'Account model instance',
        content: {'application/json': {schema: {'x-ts-type': Account}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Account> {
    return await this.accountRepository.findById(id);
  }

  @patch('/accounts/{id}', {
    responses: {
      '204': {
        description: 'Account PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() account: Account,
  ): Promise<void> {
    await this.accountRepository.updateById(id, account);
  }

  @put('/accounts/{id}', {
    responses: {
      '204': {
        description: 'Account PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() account: Account,
  ): Promise<void> {
    await this.accountRepository.replaceById(id, account);
  }

  @del('/accounts/{id}', {
    responses: {
      '204': {
        description: 'Account DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.accountRepository.deleteById(id);
  }
}
