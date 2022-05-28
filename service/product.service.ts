import { GraphQLClient, gql } from "graphql-request";

const url = process.env.NEXT_PUBLIC_API_URL + `/graphql`;
const productQuery = new GraphQLClient(url);

export default class ProductService {
    static async getRecentProducts() {
        const query = gql`
            query {
                products {
                    data {
                        attributes {
                            name
                        }
                    }
                }
            }
        `;
        const res = await productQuery.request(query);
        return res;
    }
}
