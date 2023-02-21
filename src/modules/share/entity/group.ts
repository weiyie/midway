import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 用户分组
 */
@EntityModel('share_group')
export class ShareGroupEntity extends BaseEntity {
  @Column({ comment: '分组ID' })
  groupId: string;

  @Column({ comment: '分组名称' })
  name: string;
}
