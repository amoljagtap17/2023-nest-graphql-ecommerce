import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Product } from './product.entity';

@ObjectType({ description: 'order model' })
@Directive('@key(fields: "id")')
export class Order {
  @Field(() => ID, { description: 'id of the order' })
  id: string;

  @Field(() => [Product], { description: 'products of the order' })
  products: Product[];
}
