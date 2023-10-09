import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType({ description: 'create product input' })
export class CreateProductInput {
  @Field({ description: 'name of the product' })
  name: string;

  @Field({ description: 'description of the product', nullable: true })
  description?: string;

  @Field(() => Float, { description: 'price of the product' })
  price: number;

  @Field({ description: 'sku of the product' })
  sku: string;

  @Field({ description: 'image url of the product', nullable: true })
  imageURL?: string;

  @Field(() => Int, { description: 'stock quantity of the product' })
  stockQuantity: number;
}
