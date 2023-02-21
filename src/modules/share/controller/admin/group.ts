import { ShareGroupEntity } from '../../entity/group';
import { BaseController, CoolController } from '@cool-midway/core';

/**
 * 分享的分组设置
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: ShareGroupEntity,
})
export class shareGroupController extends BaseController {}
