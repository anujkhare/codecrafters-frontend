import Model, { attr, belongsTo } from '@ember-data/model';
import type UserModel from 'codecrafters-frontend/models/user';

export default class DownvoteModel extends Model {
  @attr({}) declare metadata: Record<string, unknown>;
  @attr('string') declare targetId: string;
  @attr('string') declare targetType: string;

  @belongsTo('user', { async: false, inverse: null }) declare user: UserModel;
}
