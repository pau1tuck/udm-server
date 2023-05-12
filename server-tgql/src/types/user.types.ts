import { Field, InputType } from "type-graphql";

@InputType()
export class RegisterUserInput {
    @Field()
    givenName!: string;

    @Field()
    familyName!: string;

    @Field()
    country!: string;

    @Field()
    email!: string;
}

@InputType()
export class CreateUserInput extends RegisterUserInput {
    @Field()
    city!: string;
}
