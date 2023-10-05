import { Field, Float, InputType } from '@nestjs/graphql';

@InputType({ description: 'create product input' })
export class CreateProductInput {
  @Field({ description: 'name of the product' })
  name: string;

  @Field({ description: 'description of the product' })
  description: string;

  @Field(() => Float, { description: 'price of the product' })
  price: number;
}
