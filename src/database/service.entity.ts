import {
  BaseEntity,
  Column,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Index,
} from 'typeorm';

@Entity('services')
@Unique(['serviceId'])
// Extending Base Entity to have out-of-the box methods such as `findAndCount`
export class ServiceEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: number;

  @Index()
  @Column({ type: 'varchar', nullable: false })
  serviceId: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar' })
  description: string;
}
