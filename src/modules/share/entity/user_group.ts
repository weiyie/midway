import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 用户分组关联关系
 */
@EntityModel('share_user_group')
export class ShareUserGroupEntity extends BaseEntity {
  @Column({ comment: '分组ID' })
  groupId: string;

  @Column({ comment: '子用户ID' })
  childId: string;
}
