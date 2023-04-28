import { ObjectType, Field, ID } from "type-graphql";
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    BaseEntity,
} from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({ nullable: true })
    facebookId?: string;

    @Field()
    @Column({ nullable: true })
    googleId?: string;

    @Field()
    @Column({ nullable: true })
    twitterId?: string;

    @Field()
    @Column({ length: 128, nullable: true })
    givenName?: string;

    @Field()
    @Column({ length: 128, nullable: true })
    familyName?: string;

    @Field()
    @Column({ length: 128, nullable: true })
    city?: string;

    @Field()
    @Column({ length: 128, nullable: true })
    country?: string;

    @Field()
    @Column({ nullable: true })
    avatar?: string;

    @Field()
    @Column({ unique: true, nullable: true })
    email?: string;

    @Column({ unique: true, nullable: true })
    password?: string;

    @Field()
    @Column({ default: false })
    verified!: boolean;

    @Field(() => [String], { nullable: true })
    @Column("simple-array", { nullable: true })
    roles?: string[];

    @Field(() => String)
    @CreateDateColumn()
    createdAt!: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt!: Date;
}
