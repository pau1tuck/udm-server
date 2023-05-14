// @/entity/track.entity.ts
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
class Track extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ unique: true })
    trackId!: string;

    @Column()
    artist!: string;

    @Column()
    title!: string;

    @Column({ nullable: true })
    version?: string;

    @Column({ default: "White Label" })
    label!: string;

    @Column({ type: "int" })
    month!: number;

    @Column({ type: "int" })
    year!: number;

    @Column({ nullable: true })
    buyUrl?: string;

    @Column({ type: "int", default: 0 })
    votes!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}

export default Track;
