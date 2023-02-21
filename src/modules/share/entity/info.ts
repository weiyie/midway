import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 分享素材
 */
@EntityModel('share_info')
export class ShareInfoEntity extends BaseEntity {
  @Column({ comment: '商品ID' })
  goodId: string;

  @Column({ comment: '图片' })
  pics: string;

  @Column({ comment: '价格', type: 'varchar' })
  prices: number[];
}
