import gql from "graphql-tag";

export const GET_ALL_PRODUCTS = gql`
  query Products {
  productCollection {
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
