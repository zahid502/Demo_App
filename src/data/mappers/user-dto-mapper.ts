import {User} from '@domain-models';
import {UserDto} from '@dto-models';
import {DomainMapper} from './domain-mapper';

export class UserDtoMapper extends DomainMapper<UserDto, User> {
  mapToDomainModel = (model: UserDto): User => {
    return {
      token: this.domainSafeValue(model.token),
      id: this.domainSafeValue(model.id),
    };
  };

  mapToDomainList = (modelList?: Array<UserDto>): Array<User> =>
    modelList?.map(item => this.mapToDomainModel(item)) ?? new Array();
}
