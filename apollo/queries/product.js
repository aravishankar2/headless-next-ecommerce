import gql from "graphql-tag";

export const GET_PRODUCT = gql`
  query Post($id: String!) {
    product(id: $id) {
      application
      color
      colorVariation
      description
      finish
      frostProof
      length
      material
      name
      productType
      productImage
      piecesPerBox
      price
      squareFootPerBox
      squareFootPerPiece
      soldByThe
      tags
      thickness
      width
      weight
      variantsCollection {
        items {
          sys {
            id
          }
        }
      }
    }
  }
`;