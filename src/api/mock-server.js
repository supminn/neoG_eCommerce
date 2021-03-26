import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";

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
      this.timing = 3000;
      this.resource("products");
    },

    seeds(server) {
      [...Array(6)].forEach((_) => {
        server.create("product", {
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          image: faker.random.image(),
          price: faker.commerce.price(),
        });
      });
    },
  });
}
