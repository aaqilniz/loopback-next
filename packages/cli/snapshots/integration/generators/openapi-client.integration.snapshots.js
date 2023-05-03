// IMPORTANT
// This snapshot file is auto-generated, but designed for humans.
// It should be checked into source control and tracked carefully.
// Re-generate by setting UPDATE_SNAPSHOTS=1 and running tests.
// Make sure to inspect the changes in the snapshots below.
// Do not ignore changes!

'use strict';

exports[`generates files with --client and --datasource for an existing datasource 1`] = `
export * from './open-api.service';

`;


exports[`generates files with --client and --datasource for an existing datasource 2`] = `
import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {PetStoreDataSource} from '../datasources';

import {OpenapiPet} from '../models/openapi-pet.model';
import {NewOpenapiPet} from '../models/new-openapi-pet.model';

/**
 * The service interface is generated from OpenAPI spec with operations tagged
 * by <no-tag>.
 */
export interface OpenApiService {
  /**
   * Returns all pets from the system that the user has access to
Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem
sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio
lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar
ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst.
Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante
molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor
eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget
eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac
sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non
augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed
lacinia.

Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu
condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus.
In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus
nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus
ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean
nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque
mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero
lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa
ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium,
pulvinar elit eu, euismod sapien.

   * @param tags tags to filter by
   * @param limit maximum number of results to return
   * @param where 
   * @returns pet response
   */
  findOpenapiPets(params: { tags: string[]; limit: number; where: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
} }): Promise<OpenapiPet[]>;

  /**
   * Creates a new pet in the store. Duplicates are allowed
   * @param _requestBody OpenapiPet to add to the store
   * @returns pet response
   */
  addOpenapiPet(params: { requestBody: NewOpenapiPet }): Promise<OpenapiPet>;

  /**
   * Returns a user based on a single ID, if the user does not have access to the
pet
   * @param id ID of pet to fetch
   * @returns pet response
   */
  findPetById(params: { id: number }): Promise<OpenapiPet>;

  /**
   * deletes a single pet based on the ID supplied
   * @param id ID of pet to delete
   */
  deleteOpenapiPet(params: { id: number }): Promise<unknown>;

}

export class OpenApiServiceProvider implements Provider<OpenApiService> {
  constructor(
    // petStore must match the name property in the datasource json file
    @inject('datasources.petStore')
    protected dataSource: PetStoreDataSource = new PetStoreDataSource(),
  ) {}

  async value(): Promise<OpenApiService> {
    const service = await getService<{apis: {'default': OpenApiService}}>(
      this.dataSource,
    );
    return service.apis['default'];
  }
}

`;


exports[`generates files with --client and --datasource for an existing datasource 3`] = `
export * from './openapi-pet.model';
export * from './new-openapi-pet.model';
export * from './openapi-error.model';

`;


exports[`generates files with --client and --datasource for an existing datasource 4`] = `
import {NewOpenapiPet} from './new-openapi-pet.model';
/**
 * The model type is generated from OpenAPI schema - OpenapiPet
 * OpenapiPet
 */
export type OpenapiPet = NewOpenapiPet & {
  id: number;
};


`;


exports[`generates files with --client and --datasource for an existing datasource 5`] = `
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - NewOpenapiPet
 * NewOpenapiPet
 */
@model({name: 'NewOpenapiPet'})
export class NewOpenapiPet {
  constructor(data?: Partial<NewOpenapiPet>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
}})
  name: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  tag?: string;

}

export interface NewOpenapiPetRelations {
  // describe navigational properties here
}

export type NewOpenapiPetWithRelations = NewOpenapiPet & NewOpenapiPetRelations;



`;


exports[`generates files with --client and --datasource for an existing datasource 6`] = `
/**
 * The model type is generated from OpenAPI schema - OpenapiError
 * OpenapiError
 */
export type OpenapiError = string;


`;


exports[`generates files with --client for an existing datasource 1`] = `
export * from './open-api.service';

`;


exports[`generates files with --client for an existing datasource 2`] = `
import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {PetStoreDataSource} from '../datasources';

import {OpenapiPet} from '../models/openapi-pet.model';
import {NewOpenapiPet} from '../models/new-openapi-pet.model';

/**
 * The service interface is generated from OpenAPI spec with operations tagged
 * by <no-tag>.
 */
export interface OpenApiService {
  /**
   * Returns all pets from the system that the user has access to
Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem
sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio
lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar
ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst.
Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante
molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor
eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget
eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac
sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non
augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed
lacinia.

Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu
condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus.
In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus
nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus
ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean
nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque
mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero
lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa
ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium,
pulvinar elit eu, euismod sapien.

   * @param tags tags to filter by
   * @param limit maximum number of results to return
   * @param where 
   * @returns pet response
   */
  findOpenapiPets(params: { tags: string[]; limit: number; where: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
} }): Promise<OpenapiPet[]>;

  /**
   * Creates a new pet in the store. Duplicates are allowed
   * @param _requestBody OpenapiPet to add to the store
   * @returns pet response
   */
  addOpenapiPet(params: { requestBody: NewOpenapiPet }): Promise<OpenapiPet>;

  /**
   * Returns a user based on a single ID, if the user does not have access to the
pet
   * @param id ID of pet to fetch
   * @returns pet response
   */
  findPetById(params: { id: number }): Promise<OpenapiPet>;

  /**
   * deletes a single pet based on the ID supplied
   * @param id ID of pet to delete
   */
  deleteOpenapiPet(params: { id: number }): Promise<unknown>;

}

export class OpenApiServiceProvider implements Provider<OpenApiService> {
  constructor(
    // petStore must match the name property in the datasource json file
    @inject('datasources.petStore')
    protected dataSource: PetStoreDataSource = new PetStoreDataSource(),
  ) {}

  async value(): Promise<OpenApiService> {
    const service = await getService<{apis: {'default': OpenApiService}}>(
      this.dataSource,
    );
    return service.apis['default'];
  }
}

`;


exports[`generates files with --client for an existing datasource 3`] = `
export * from './openapi-pet.model';
export * from './new-openapi-pet.model';
export * from './openapi-error.model';

`;


exports[`generates files with --client for an existing datasource 4`] = `
import {NewOpenapiPet} from './new-openapi-pet.model';
/**
 * The model type is generated from OpenAPI schema - OpenapiPet
 * OpenapiPet
 */
export type OpenapiPet = NewOpenapiPet & {
  id: number;
};


`;


exports[`generates files with --client for an existing datasource 5`] = `
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - NewOpenapiPet
 * NewOpenapiPet
 */
@model({name: 'NewOpenapiPet'})
export class NewOpenapiPet {
  constructor(data?: Partial<NewOpenapiPet>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
}})
  name: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  tag?: string;

}

export interface NewOpenapiPetRelations {
  // describe navigational properties here
}

export type NewOpenapiPetWithRelations = NewOpenapiPet & NewOpenapiPetRelations;



`;


exports[`generates files with --client for an existing datasource 6`] = `
/**
 * The model type is generated from OpenAPI schema - OpenapiError
 * OpenapiError
 */
export type OpenapiError = string;


`;


exports[`openapi-generator with --client allows baseModel option 1`] = `
export * from './openapi.open-api.controller';

`;


exports[`openapi-generator with --client allows baseModel option 2`] = `
import {api, operation, param, requestBody} from '@loopback/rest';
import {inject} from '@loopback/core';

import {OpenApiService} from '../services';
  
import {OpenapiPet} from '../models/openapi-pet.model';
import {NewOpenapiPet} from '../models/new-openapi-pet.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by <no-tag>.
 *
 */
@api({
  components: {
    schemas: {
      OpenapiPet: {},
      NewOpenapiPet: {},
      OpenapiError: {},
    },
  },
  paths: {},
})
export class OpenApiController {
    constructor(@inject('services.OpenApiService')
    protected openApiService: OpenApiService) {}
  
  /**
   * Returns all pets from the system that the user has access to
Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem
sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio
lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar
ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst.
Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante
molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor
eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget
eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac
sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non
augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed
lacinia.

Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu
condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus.
In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus
nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus
ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean
nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque
mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero
lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa
ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium,
pulvinar elit eu, euismod sapien.

   *
   * @param tags tags to filter by
   * @param limit maximum number of results to return
   * @param where 
   * @returns pet response
   */
  @operation('get', '/openapi/pets', {
  description: 'Returns all pets from the system that the user has access to\\nNam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.\\n\\nSed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.\\n',
  operationId: 'findOpenapiPets',
  parameters: [
    {
      name: 'tags',
      in: 'query',
      description: 'tags to filter by',
      required: false,
      style: 'form',
      schema: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
    {
      name: 'limit',
      in: 'query',
      description: 'maximum number of results to return',
      required: false,
      schema: {
        type: 'integer',
        format: 'int32',
      },
    },
    {
      name: 'where',
      in: 'query',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            'title"': 'TodoList.WhereFilter',
            additionalProperties: true,
          },
        },
      },
    },
  ],
  responses: {
    '200': {
      description: 'pet response',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/OpenapiPet',
            },
          },
        },
      },
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiError',
          },
        },
      },
    },
  },
})
  async findOpenapiPets(@param({
  name: 'tags',
  in: 'query',
  description: 'tags to filter by',
  required: false,
  style: 'form',
  schema: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
}) tags: string[] | undefined, @param({
  name: 'limit',
  in: 'query',
  description: 'maximum number of results to return',
  required: false,
  schema: {
    type: 'integer',
    format: 'int32',
  },
}) limit: number | undefined, @param({
  name: 'where',
  in: 'query',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        'title"': 'TodoList.WhereFilter',
        additionalProperties: true,
      },
    },
  },
}) where: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
} | undefined): Promise<OpenapiPet[]> {
     return this.openApiService.findOpenapiPets(tags, limit, where); 
  }
  /**
   * Creates a new pet in the store. Duplicates are allowed
   *
   * @param _requestBody OpenapiPet to add to the store
   * @returns pet response
   */
  @operation('post', '/openapi/pets', {
  description: 'Creates a new pet in the store.  Duplicates are allowed',
  operationId: 'addOpenapiPet',
  requestBody: {
    description: 'OpenapiPet to add to the store',
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/NewOpenapiPet',
        },
      },
    },
  },
  responses: {
    '200': {
      description: 'pet response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiPet',
          },
        },
      },
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiError',
          },
        },
      },
    },
  },
})
  async addOpenapiPet(@requestBody({
  description: 'OpenapiPet to add to the store',
  required: true,
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/NewOpenapiPet',
      },
    },
  },
}) _requestBody: NewOpenapiPet): Promise<OpenapiPet> {
     return this.openApiService.addOpenapiPet(_requestBody); 
  }
  /**
   * Returns a user based on a single ID, if the user does not have access to the
pet
   *
   * @param id ID of pet to fetch
   * @returns pet response
   */
  @operation('get', '/openapi/pets/{id}', {
  description: 'Returns a user based on a single ID, if the user does not have access to the pet',
  operationId: 'find pet by id',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'ID of pet to fetch',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  responses: {
    '200': {
      description: 'pet response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiPet',
          },
        },
      },
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiError',
          },
        },
      },
    },
  },
})
  async findPetById(@param({
  name: 'id',
  in: 'path',
  description: 'ID of pet to fetch',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
  },
}) id: number): Promise<OpenapiPet> {
     return this.openApiService.findPetById(id); 
  }
  /**
   * deletes a single pet based on the ID supplied
   *
   * @param id ID of pet to delete
   */
  @operation('delete', '/openapi/pets/{id}', {
  description: 'deletes a single pet based on the ID supplied',
  operationId: 'deleteOpenapiPet',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'ID of pet to delete',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  responses: {
    '204': {
      description: 'pet deleted',
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiError',
          },
        },
      },
    },
  },
})
  async deleteOpenapiPet(@param({
  name: 'id',
  in: 'path',
  description: 'ID of pet to delete',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
  },
}) id: number): Promise<unknown> {
     return this.openApiService.deleteOpenapiPet(id); 
  }
}


`;


exports[`openapi-generator with --client allows baseModel option 3`] = `
export * from './pet-store.datasource';

`;


exports[`openapi-generator with --client allows baseModel option 4`] = `
import {
  inject,
  lifeCycleObserver,
  LifeCycleObserver,
} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';

const config = {
  name: 'petStore',
  connector: 'openapi',
  spec: '../../../fixtures/openapi/3.0/petstore-expanded.yaml',
  validate: false,
  positional: 'bodyLast',
};

@lifeCycleObserver('datasource')
export class PetStoreDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'petStore';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.petStore', {optional: true})
    dsConfig: object = config,
  ) {
    super({transformResponse, ...dsConfig});
  }
}

/**
 * Transform the http response into the return value
 */
function transformResponse(response: {
  url: string,
  method: string,
  status: number,
  statusText: string,
  headers: object,
  text: string,
  body: unknown,
}) {
  if (response.status < 400) {
    return response.body ?? response.text;
  }
  const err = HttpErrors(response.status, response.statusText, response);
  throw err;
}

`;


exports[`openapi-generator with --client allows baseModel option 5`] = `
export * from './open-api.service';

`;


exports[`openapi-generator with --client allows baseModel option 6`] = `
import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {PetStoreDataSource} from '../datasources';

import {OpenapiPet} from '../models/openapi-pet.model';
import {NewOpenapiPet} from '../models/new-openapi-pet.model';

/**
 * The service interface is generated from OpenAPI spec with operations tagged
 * by <no-tag>.
 */
export interface OpenApiService {
  /**
   * Returns all pets from the system that the user has access to
Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem
sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio
lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar
ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst.
Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante
molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor
eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget
eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac
sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non
augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed
lacinia.

Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu
condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus.
In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus
nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus
ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean
nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque
mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero
lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa
ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium,
pulvinar elit eu, euismod sapien.

   * @param tags tags to filter by
   * @param limit maximum number of results to return
   * @param where 
   * @returns pet response
   */
  findOpenapiPets(tags: string[] | undefined, limit: number | undefined, where: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
} | undefined): Promise<OpenapiPet[]>;

  /**
   * Creates a new pet in the store. Duplicates are allowed
   * @param _requestBody OpenapiPet to add to the store
   * @returns pet response
   */
  addOpenapiPet(_requestBody: NewOpenapiPet): Promise<OpenapiPet>;

  /**
   * Returns a user based on a single ID, if the user does not have access to the
pet
   * @param id ID of pet to fetch
   * @returns pet response
   */
  findPetById(id: number): Promise<OpenapiPet>;

  /**
   * deletes a single pet based on the ID supplied
   * @param id ID of pet to delete
   */
  deleteOpenapiPet(id: number): Promise<unknown>;

}

export class OpenApiServiceProvider implements Provider<OpenApiService> {
  constructor(
    // petStore must match the name property in the datasource json file
    @inject('datasources.petStore')
    protected dataSource: PetStoreDataSource = new PetStoreDataSource(),
  ) {}

  async value(): Promise<OpenApiService> {
    const service = await getService<{apis: {'default': OpenApiService}}>(
      this.dataSource,
    );
    return service.apis['default'];
  }
}

`;


exports[`openapi-generator with --client allows baseModel option 7`] = `
export * from './openapi-pet.model';
export * from './new-openapi-pet.model';
export * from './openapi-error.model';

`;


exports[`openapi-generator with --client allows baseModel option 8`] = `
import {NewOpenapiPet} from './new-openapi-pet.model';
/**
 * The model type is generated from OpenAPI schema - OpenapiPet
 * OpenapiPet
 */
export type OpenapiPet = NewOpenapiPet & {
  id: number;
};


`;


exports[`openapi-generator with --client allows baseModel option 9`] = `
import {model, property, Model} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - NewOpenapiPet
 * NewOpenapiPet
 */
@model({name: 'NewOpenapiPet'})
export class NewOpenapiPet extends Model {
  constructor(data?: Partial<NewOpenapiPet>) {
    super(data);
  }

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
}})
  name: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  tag?: string;

}

export interface NewOpenapiPetRelations {
  // describe navigational properties here
}

export type NewOpenapiPetWithRelations = NewOpenapiPet & NewOpenapiPetRelations;



`;


exports[`openapi-generator with --client allows baseModel option 10`] = `
/**
 * The model type is generated from OpenAPI schema - OpenapiError
 * OpenapiError
 */
export type OpenapiError = string;


`;


exports[`openapi-generator with --client does not generates files for client with --no-client 1`] = `
export * from './openapi.open-api.controller';

`;


exports[`openapi-generator with --client does not generates files for client with --no-client 2`] = `
import {api, operation, param, requestBody} from '@loopback/rest';
import {OpenapiPet} from '../models/openapi-pet.model';
import {NewOpenapiPet} from '../models/new-openapi-pet.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by <no-tag>.
 *
 */
@api({
  components: {
    schemas: {
      OpenapiPet: {},
      NewOpenapiPet: {},
      OpenapiError: {},
    },
  },
  paths: {},
})
export class OpenApiController {
    constructor() {} 
  /**
   * Returns all pets from the system that the user has access to
Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem
sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio
lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar
ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst.
Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante
molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor
eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget
eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac
sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non
augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed
lacinia.

Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu
condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus.
In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus
nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus
ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean
nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque
mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero
lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa
ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium,
pulvinar elit eu, euismod sapien.

   *
   * @param tags tags to filter by
   * @param limit maximum number of results to return
   * @param where 
   * @returns pet response
   */
  @operation('get', '/openapi/pets', {
  description: 'Returns all pets from the system that the user has access to\\nNam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.\\n\\nSed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.\\n',
  operationId: 'findOpenapiPets',
  parameters: [
    {
      name: 'tags',
      in: 'query',
      description: 'tags to filter by',
      required: false,
      style: 'form',
      schema: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
    {
      name: 'limit',
      in: 'query',
      description: 'maximum number of results to return',
      required: false,
      schema: {
        type: 'integer',
        format: 'int32',
      },
    },
    {
      name: 'where',
      in: 'query',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            'title"': 'TodoList.WhereFilter',
            additionalProperties: true,
          },
        },
      },
    },
  ],
  responses: {
    '200': {
      description: 'pet response',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/OpenapiPet',
            },
          },
        },
      },
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiError',
          },
        },
      },
    },
  },
})
  async findOpenapiPets(@param({
  name: 'tags',
  in: 'query',
  description: 'tags to filter by',
  required: false,
  style: 'form',
  schema: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
}) tags: string[] | undefined, @param({
  name: 'limit',
  in: 'query',
  description: 'maximum number of results to return',
  required: false,
  schema: {
    type: 'integer',
    format: 'int32',
  },
}) limit: number | undefined, @param({
  name: 'where',
  in: 'query',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        'title"': 'TodoList.WhereFilter',
        additionalProperties: true,
      },
    },
  },
}) where: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
} | undefined): Promise<OpenapiPet[]> {
     throw new Error('Not implemented'); 
  }
  /**
   * Creates a new pet in the store. Duplicates are allowed
   *
   * @param _requestBody OpenapiPet to add to the store
   * @returns pet response
   */
  @operation('post', '/openapi/pets', {
  description: 'Creates a new pet in the store.  Duplicates are allowed',
  operationId: 'addOpenapiPet',
  requestBody: {
    description: 'OpenapiPet to add to the store',
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/NewOpenapiPet',
        },
      },
    },
  },
  responses: {
    '200': {
      description: 'pet response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiPet',
          },
        },
      },
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiError',
          },
        },
      },
    },
  },
})
  async addOpenapiPet(@requestBody({
  description: 'OpenapiPet to add to the store',
  required: true,
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/NewOpenapiPet',
      },
    },
  },
}) _requestBody: NewOpenapiPet): Promise<OpenapiPet> {
     throw new Error('Not implemented'); 
  }
  /**
   * Returns a user based on a single ID, if the user does not have access to the
pet
   *
   * @param id ID of pet to fetch
   * @returns pet response
   */
  @operation('get', '/openapi/pets/{id}', {
  description: 'Returns a user based on a single ID, if the user does not have access to the pet',
  operationId: 'find pet by id',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'ID of pet to fetch',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  responses: {
    '200': {
      description: 'pet response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiPet',
          },
        },
      },
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiError',
          },
        },
      },
    },
  },
})
  async findPetById(@param({
  name: 'id',
  in: 'path',
  description: 'ID of pet to fetch',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
  },
}) id: number): Promise<OpenapiPet> {
     throw new Error('Not implemented'); 
  }
  /**
   * deletes a single pet based on the ID supplied
   *
   * @param id ID of pet to delete
   */
  @operation('delete', '/openapi/pets/{id}', {
  description: 'deletes a single pet based on the ID supplied',
  operationId: 'deleteOpenapiPet',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'ID of pet to delete',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  responses: {
    '204': {
      description: 'pet deleted',
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiError',
          },
        },
      },
    },
  },
})
  async deleteOpenapiPet(@param({
  name: 'id',
  in: 'path',
  description: 'ID of pet to delete',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
  },
}) id: number): Promise<unknown> {
     throw new Error('Not implemented'); 
  }
}


`;


exports[`openapi-generator with --client does not generates files for client with --no-client 3`] = `
export * from './openapi-pet.model';
export * from './new-openapi-pet.model';
export * from './openapi-error.model';

`;


exports[`openapi-generator with --client does not generates files for client with --no-client 4`] = `
import {NewOpenapiPet} from './new-openapi-pet.model';
/**
 * The model type is generated from OpenAPI schema - OpenapiPet
 * OpenapiPet
 */
export type OpenapiPet = NewOpenapiPet & {
  id: number;
};


`;


exports[`openapi-generator with --client does not generates files for client with --no-client 5`] = `
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - NewOpenapiPet
 * NewOpenapiPet
 */
@model({name: 'NewOpenapiPet'})
export class NewOpenapiPet {
  constructor(data?: Partial<NewOpenapiPet>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
}})
  name: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  tag?: string;

}

export interface NewOpenapiPetRelations {
  // describe navigational properties here
}

export type NewOpenapiPetWithRelations = NewOpenapiPet & NewOpenapiPetRelations;



`;


exports[`openapi-generator with --client does not generates files for client with --no-client 6`] = `
/**
 * The model type is generated from OpenAPI schema - OpenapiError
 * OpenapiError
 */
export type OpenapiError = string;


`;


exports[`openapi-generator with --client does not generates files for server with --no-server 1`] = `
export * from './pet-store.datasource';

`;


exports[`openapi-generator with --client does not generates files for server with --no-server 2`] = `
import {
  inject,
  lifeCycleObserver,
  LifeCycleObserver,
} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';

const config = {
  name: 'petStore',
  connector: 'openapi',
  spec: '../../../fixtures/openapi/3.0/petstore-expanded.yaml',
  validate: false,
  positional: 'bodyLast',
};

@lifeCycleObserver('datasource')
export class PetStoreDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'petStore';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.petStore', {optional: true})
    dsConfig: object = config,
  ) {
    super({transformResponse, ...dsConfig});
  }
}

/**
 * Transform the http response into the return value
 */
function transformResponse(response: {
  url: string,
  method: string,
  status: number,
  statusText: string,
  headers: object,
  text: string,
  body: unknown,
}) {
  if (response.status < 400) {
    return response.body ?? response.text;
  }
  const err = HttpErrors(response.status, response.statusText, response);
  throw err;
}

`;


exports[`openapi-generator with --client does not generates files for server with --no-server 3`] = `
export * from './open-api.service';

`;


exports[`openapi-generator with --client does not generates files for server with --no-server 4`] = `
import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {PetStoreDataSource} from '../datasources';

import {OpenapiPet} from '../models/openapi-pet.model';
import {NewOpenapiPet} from '../models/new-openapi-pet.model';

/**
 * The service interface is generated from OpenAPI spec with operations tagged
 * by <no-tag>.
 */
export interface OpenApiService {
  /**
   * Returns all pets from the system that the user has access to
Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem
sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio
lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar
ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst.
Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante
molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor
eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget
eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac
sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non
augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed
lacinia.

Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu
condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus.
In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus
nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus
ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean
nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque
mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero
lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa
ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium,
pulvinar elit eu, euismod sapien.

   * @param tags tags to filter by
   * @param limit maximum number of results to return
   * @param where 
   * @returns pet response
   */
  findOpenapiPets(tags: string[] | undefined, limit: number | undefined, where: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
} | undefined): Promise<OpenapiPet[]>;

  /**
   * Creates a new pet in the store. Duplicates are allowed
   * @param _requestBody OpenapiPet to add to the store
   * @returns pet response
   */
  addOpenapiPet(_requestBody: NewOpenapiPet): Promise<OpenapiPet>;

  /**
   * Returns a user based on a single ID, if the user does not have access to the
pet
   * @param id ID of pet to fetch
   * @returns pet response
   */
  findPetById(id: number): Promise<OpenapiPet>;

  /**
   * deletes a single pet based on the ID supplied
   * @param id ID of pet to delete
   */
  deleteOpenapiPet(id: number): Promise<unknown>;

}

export class OpenApiServiceProvider implements Provider<OpenApiService> {
  constructor(
    // petStore must match the name property in the datasource json file
    @inject('datasources.petStore')
    protected dataSource: PetStoreDataSource = new PetStoreDataSource(),
  ) {}

  async value(): Promise<OpenApiService> {
    const service = await getService<{apis: {'default': OpenApiService}}>(
      this.dataSource,
    );
    return service.apis['default'];
  }
}

`;


exports[`openapi-generator with --client does not generates files for server with --no-server 5`] = `
export * from './openapi-pet.model';
export * from './new-openapi-pet.model';
export * from './openapi-error.model';

`;


exports[`openapi-generator with --client does not generates files for server with --no-server 6`] = `
import {NewOpenapiPet} from './new-openapi-pet.model';
/**
 * The model type is generated from OpenAPI schema - OpenapiPet
 * OpenapiPet
 */
export type OpenapiPet = NewOpenapiPet & {
  id: number;
};


`;


exports[`openapi-generator with --client does not generates files for server with --no-server 7`] = `
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - NewOpenapiPet
 * NewOpenapiPet
 */
@model({name: 'NewOpenapiPet'})
export class NewOpenapiPet {
  constructor(data?: Partial<NewOpenapiPet>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
}})
  name: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  tag?: string;

}

export interface NewOpenapiPetRelations {
  // describe navigational properties here
}

export type NewOpenapiPetWithRelations = NewOpenapiPet & NewOpenapiPetRelations;



`;


exports[`openapi-generator with --client does not generates files for server with --no-server 8`] = `
/**
 * The model type is generated from OpenAPI schema - OpenapiError
 * OpenapiError
 */
export type OpenapiError = string;


`;


exports[`openapi-generator with --client generates all files for both server and client 1`] = `
export * from './openapi.open-api.controller';

`;


exports[`openapi-generator with --client generates all files for both server and client 2`] = `
import {api, operation, param, requestBody} from '@loopback/rest';
import {inject} from '@loopback/core';

import {OpenApiService} from '../services';
  
import {OpenapiPet} from '../models/openapi-pet.model';
import {NewOpenapiPet} from '../models/new-openapi-pet.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by <no-tag>.
 *
 */
@api({
  components: {
    schemas: {
      OpenapiPet: {},
      NewOpenapiPet: {},
      OpenapiError: {},
    },
  },
  paths: {},
})
export class OpenApiController {
    constructor(@inject('services.OpenApiService')
    protected openApiService: OpenApiService) {}
  
  /**
   * Returns all pets from the system that the user has access to
Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem
sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio
lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar
ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst.
Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante
molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor
eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget
eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac
sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non
augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed
lacinia.

Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu
condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus.
In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus
nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus
ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean
nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque
mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero
lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa
ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium,
pulvinar elit eu, euismod sapien.

   *
   * @param tags tags to filter by
   * @param limit maximum number of results to return
   * @param where 
   * @returns pet response
   */
  @operation('get', '/openapi/pets', {
  description: 'Returns all pets from the system that the user has access to\\nNam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.\\n\\nSed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.\\n',
  operationId: 'findOpenapiPets',
  parameters: [
    {
      name: 'tags',
      in: 'query',
      description: 'tags to filter by',
      required: false,
      style: 'form',
      schema: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
    {
      name: 'limit',
      in: 'query',
      description: 'maximum number of results to return',
      required: false,
      schema: {
        type: 'integer',
        format: 'int32',
      },
    },
    {
      name: 'where',
      in: 'query',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            'title"': 'TodoList.WhereFilter',
            additionalProperties: true,
          },
        },
      },
    },
  ],
  responses: {
    '200': {
      description: 'pet response',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/OpenapiPet',
            },
          },
        },
      },
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiError',
          },
        },
      },
    },
  },
})
  async findOpenapiPets(@param({
  name: 'tags',
  in: 'query',
  description: 'tags to filter by',
  required: false,
  style: 'form',
  schema: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
}) tags: string[] | undefined, @param({
  name: 'limit',
  in: 'query',
  description: 'maximum number of results to return',
  required: false,
  schema: {
    type: 'integer',
    format: 'int32',
  },
}) limit: number | undefined, @param({
  name: 'where',
  in: 'query',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        'title"': 'TodoList.WhereFilter',
        additionalProperties: true,
      },
    },
  },
}) where: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
} | undefined): Promise<OpenapiPet[]> {
     return this.openApiService.findOpenapiPets(tags, limit, where); 
  }
  /**
   * Creates a new pet in the store. Duplicates are allowed
   *
   * @param _requestBody OpenapiPet to add to the store
   * @returns pet response
   */
  @operation('post', '/openapi/pets', {
  description: 'Creates a new pet in the store.  Duplicates are allowed',
  operationId: 'addOpenapiPet',
  requestBody: {
    description: 'OpenapiPet to add to the store',
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/NewOpenapiPet',
        },
      },
    },
  },
  responses: {
    '200': {
      description: 'pet response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiPet',
          },
        },
      },
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiError',
          },
        },
      },
    },
  },
})
  async addOpenapiPet(@requestBody({
  description: 'OpenapiPet to add to the store',
  required: true,
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/NewOpenapiPet',
      },
    },
  },
}) _requestBody: NewOpenapiPet): Promise<OpenapiPet> {
     return this.openApiService.addOpenapiPet(_requestBody); 
  }
  /**
   * Returns a user based on a single ID, if the user does not have access to the
pet
   *
   * @param id ID of pet to fetch
   * @returns pet response
   */
  @operation('get', '/openapi/pets/{id}', {
  description: 'Returns a user based on a single ID, if the user does not have access to the pet',
  operationId: 'find pet by id',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'ID of pet to fetch',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  responses: {
    '200': {
      description: 'pet response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiPet',
          },
        },
      },
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiError',
          },
        },
      },
    },
  },
})
  async findPetById(@param({
  name: 'id',
  in: 'path',
  description: 'ID of pet to fetch',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
  },
}) id: number): Promise<OpenapiPet> {
     return this.openApiService.findPetById(id); 
  }
  /**
   * deletes a single pet based on the ID supplied
   *
   * @param id ID of pet to delete
   */
  @operation('delete', '/openapi/pets/{id}', {
  description: 'deletes a single pet based on the ID supplied',
  operationId: 'deleteOpenapiPet',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'ID of pet to delete',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  responses: {
    '204': {
      description: 'pet deleted',
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/OpenapiError',
          },
        },
      },
    },
  },
})
  async deleteOpenapiPet(@param({
  name: 'id',
  in: 'path',
  description: 'ID of pet to delete',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
  },
}) id: number): Promise<unknown> {
     return this.openApiService.deleteOpenapiPet(id); 
  }
}


`;


exports[`openapi-generator with --client generates all files for both server and client 3`] = `
export * from './pet-store.datasource';

`;


exports[`openapi-generator with --client generates all files for both server and client 4`] = `
import {
  inject,
  lifeCycleObserver,
  LifeCycleObserver,
} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';

const config = {
  name: 'petStore',
  connector: 'openapi',
  spec: '../../../fixtures/openapi/3.0/petstore-expanded.yaml',
  validate: false,
  positional: 'bodyLast',
};

@lifeCycleObserver('datasource')
export class PetStoreDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'petStore';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.petStore', {optional: true})
    dsConfig: object = config,
  ) {
    super({transformResponse, ...dsConfig});
  }
}

/**
 * Transform the http response into the return value
 */
function transformResponse(response: {
  url: string,
  method: string,
  status: number,
  statusText: string,
  headers: object,
  text: string,
  body: unknown,
}) {
  if (response.status < 400) {
    return response.body ?? response.text;
  }
  const err = HttpErrors(response.status, response.statusText, response);
  throw err;
}

`;


exports[`openapi-generator with --client generates all files for both server and client 5`] = `
export * from './open-api.service';

`;


exports[`openapi-generator with --client generates all files for both server and client 6`] = `
import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {PetStoreDataSource} from '../datasources';

import {OpenapiPet} from '../models/openapi-pet.model';
import {NewOpenapiPet} from '../models/new-openapi-pet.model';

/**
 * The service interface is generated from OpenAPI spec with operations tagged
 * by <no-tag>.
 */
export interface OpenApiService {
  /**
   * Returns all pets from the system that the user has access to
Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem
sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio
lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar
ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst.
Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante
molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor
eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget
eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac
sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non
augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed
lacinia.

Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu
condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus.
In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus
nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus
ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean
nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque
mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero
lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa
ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium,
pulvinar elit eu, euismod sapien.

   * @param tags tags to filter by
   * @param limit maximum number of results to return
   * @param where 
   * @returns pet response
   */
  findOpenapiPets(tags: string[] | undefined, limit: number | undefined, where: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
} | undefined): Promise<OpenapiPet[]>;

  /**
   * Creates a new pet in the store. Duplicates are allowed
   * @param _requestBody OpenapiPet to add to the store
   * @returns pet response
   */
  addOpenapiPet(_requestBody: NewOpenapiPet): Promise<OpenapiPet>;

  /**
   * Returns a user based on a single ID, if the user does not have access to the
pet
   * @param id ID of pet to fetch
   * @returns pet response
   */
  findPetById(id: number): Promise<OpenapiPet>;

  /**
   * deletes a single pet based on the ID supplied
   * @param id ID of pet to delete
   */
  deleteOpenapiPet(id: number): Promise<unknown>;

}

export class OpenApiServiceProvider implements Provider<OpenApiService> {
  constructor(
    // petStore must match the name property in the datasource json file
    @inject('datasources.petStore')
    protected dataSource: PetStoreDataSource = new PetStoreDataSource(),
  ) {}

  async value(): Promise<OpenApiService> {
    const service = await getService<{apis: {'default': OpenApiService}}>(
      this.dataSource,
    );
    return service.apis['default'];
  }
}

`;


exports[`openapi-generator with --client generates all files for both server and client 7`] = `
export * from './openapi-pet.model';
export * from './new-openapi-pet.model';
export * from './openapi-error.model';

`;


exports[`openapi-generator with --client generates all files for both server and client 8`] = `
import {NewOpenapiPet} from './new-openapi-pet.model';
/**
 * The model type is generated from OpenAPI schema - OpenapiPet
 * OpenapiPet
 */
export type OpenapiPet = NewOpenapiPet & {
  id: number;
};


`;


exports[`openapi-generator with --client generates all files for both server and client 9`] = `
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - NewOpenapiPet
 * NewOpenapiPet
 */
@model({name: 'NewOpenapiPet'})
export class NewOpenapiPet {
  constructor(data?: Partial<NewOpenapiPet>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
}})
  name: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  tag?: string;

}

export interface NewOpenapiPetRelations {
  // describe navigational properties here
}

export type NewOpenapiPetWithRelations = NewOpenapiPet & NewOpenapiPetRelations;



`;


exports[`openapi-generator with --client generates all files for both server and client 10`] = `
/**
 * The model type is generated from OpenAPI schema - OpenapiError
 * OpenapiError
 */
export type OpenapiError = string;


`;
