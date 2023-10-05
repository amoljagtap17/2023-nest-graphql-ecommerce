import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'product model' })
export class Product {
  @Field(() => ID, { description: 'id of the product' })
  id: string;

  @Field({ description: 'name of the product' })
  name: string;

  @Field({ description: 'description of the product' })
  description: string;

  @Field(() => Float, { description: 'price of the product' })
  price: number;
}
