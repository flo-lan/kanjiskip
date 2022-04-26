import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Kanji extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  character: string
}
