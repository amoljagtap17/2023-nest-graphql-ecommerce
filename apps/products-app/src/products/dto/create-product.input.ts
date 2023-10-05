import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
