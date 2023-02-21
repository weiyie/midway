import { ShareTaskEntity } from '../../entity/task';
import { BaseController, CoolController } from '@cool-midway/core';

/**
 * 分享任务
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: ShareTaskEntity,
})
export class shareTaskController extends BaseController {}
