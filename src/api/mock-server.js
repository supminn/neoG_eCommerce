import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";

faker.seed(4);

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer,
    },

    models: {
      product: Model,
    },

    routes() {
      this.namespace = "api";
      this.timing = 1000;
      this.resource("products");
    },

    seeds(server) {
      [...Array(10)].forEach((_) => {
        server.create("product", {
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          image: faker.random.image(),
          price: faker.commerce.price(),
          in_stock: faker.datatype.boolean(),
          fast_delivery: faker.datatype.boolean()
        });
      });
    },
  });
}