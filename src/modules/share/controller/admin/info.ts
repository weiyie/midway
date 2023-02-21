import { ShareInfoEntity } from '../../entity/info';
import { BaseController, CoolController } from '@cool-midway/core';

/**
 * 分享素材
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: ShareInfoEntity,
})
export class shareInfoController extends BaseController {}
