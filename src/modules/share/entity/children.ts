import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 用户父子关系关联关系
 */
@EntityModel('share_user_children')
export class ShareChildrenEntity extends BaseEntity {
  @Column({ comment: '用户ID' })
  userId: string;

  @Column({ comment: '子用户ID' })
  childId: string;

  @Column({ comment: '子用户名称' })
  child: string;
}
