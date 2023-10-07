import { Directive, Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'product model' })
@Directive('@key(fields: "id")')
export class Product {
  @Field(() => ID, { description: 'id of the product' })
  id: string;

  @Field({ description: 'name of the product' })
  name: string;

  @Field({ description: 'description of the product', nullable: true })
  description: string;

  @Field(() => Float, { description: 'price of the product' })
  price: number;

  @Field({ description: 'sku of the product' })
  sku: string;

  @Field({ description: 'image url of the product', nullable: true })
  imageURL: string;

  @Field(() => Int, { description: 'stock quantity of the product' })
  stockQuantity: number;
}
