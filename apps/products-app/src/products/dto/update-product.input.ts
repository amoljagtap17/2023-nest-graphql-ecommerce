import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './create-product.input';

@InputType({ description: 'update product input' })
export class UpdateProductInput extends PartialType(CreateProductInput) {}
