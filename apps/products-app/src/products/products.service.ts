import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    return this.products.find((product) => product.id === id);
  }

  create(createProductInput: CreateProductInput) {
    const newProduct = {
      id: `${this.products.length + 1}`,
      ...createProductInput,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(id: string, updateProductInput: UpdateProductInput) {
    const productToUpdate = this.findOne(id);
    const filteredProducts = this.products.filter(
      (product) => product.id !== id,
    );

    const updatedProduct = {
      ...productToUpdate,
      ...updateProductInput,
    };

    this.products = [...filteredProducts, updatedProduct];

    return updatedProduct;
  }

  remove(id: string) {
    const productToDelete = this.findOne(id);
    const filteredProducts = this.products.filter(
      (product) => product.id !== id,
    );

    this.products = filteredProducts;

    return productToDelete;
  }
}
