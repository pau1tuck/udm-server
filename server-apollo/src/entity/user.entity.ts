// @/entity/user.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    BaseEntity,
} from "typeorm";

@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ nullable: true })
    facebookId?: string;

    @Column({ nullable: true })
    googleId?: string;

    @Column({ nullable: true })
    twitterId?: string;

    @Column({ length: 128, nullable: true })
    givenName?: string;

    @Column({ length: 128, nullable: true })
    familyName?: string;

    @Column({ length: 128, nullable: true })
    city?: string;

    @Column({ length: 128, nullable: true })
    country?: string;

    @Column({ nullable: true })
    avatar?: string;

    @Column({ unique: true, nullable: true })
    email?: string;

    @Column({ unique: true, nullable: true })
    password?: string;

    @Column({ default: false })
    verified!: boolean;

    @Column("simple-array", { default: [] })
    roles?: string[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}

export default User;
