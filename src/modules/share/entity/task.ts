import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 分享任务列表
 */
@EntityModel('share_task')
export class ShareTaskEntity extends BaseEntity {
  @Column({ comment: '商品ID' })
  goodId: string;

  @Column({ comment: '用户ID' })
  userId: string;

  @Column({ comment: '分组ID' })
  groupId: string;

  @Column({ comment: '执行时间', type: 'timestamp' })
  actionTime: string;

  @Column({ comment: '实际执行时间', type: 'timestamp' })
  actionTimeActual: string;

  @Column({ comment: '执行账号', nullable: true })
  account: string;

  @Column({ comment: '文案' })
  text: string;
}
