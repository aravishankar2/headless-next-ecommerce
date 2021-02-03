import gql from "graphql-tag";

export const GET_ALL_PRODUCTS = gql`
  query Products($limit: Int, $material: String, $tags_contains_some: [String], $soldByThe: String ) {
  productCollection(limit: $limit, where: { material: $material, tags_contains_some: $tags_contains_some, soldByThe: $soldByThe}) {
    items {
     	name
      productImage
      price
      length
      material
      width
      thickness
      piecesPerBox
      squareFootPerPiece
      squareFootPerBox
      soldByThe
      sys {
        id
      }
    }
  }
}
`;
