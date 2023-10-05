import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
