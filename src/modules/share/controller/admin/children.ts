import { ShareChildrenEntity } from '../../entity/children';
import { BaseController, CoolController } from '@cool-midway/core';

/**
 * 分享用户的子用户设置
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: ShareChildrenEntity,
})
export class shareChildrenController extends BaseController {}
