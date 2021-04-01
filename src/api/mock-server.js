import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";
import { database } from "./database";

faker.seed(4);

export const setupMockServer = () => {
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
     database.forEach(item => {
       server.create("product",item);
     })
    },
  });
}