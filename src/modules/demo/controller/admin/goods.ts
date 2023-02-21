import { DemoGoodsEntity } from '../../entity/goods';
import { BaseController, CoolController } from '@cool-midway/core';

/**
 * 测试
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: DemoGoodsEntity,
  pageQueryOp: {
    keyWordLikeFields: ['title'],
    fieldEq: ['type'],
  },
})
export class CoolGoodsController extends BaseController {}
