import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductsModule } from './products/products.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      sortSchema: true,
      introspection: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      include: [ProductsModule],
    }),
    ProductsModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class ProductsAppModule {}
