import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import Link from "next/link";
import { ProductImage } from "../../interfaces/ProductImage";

const searchClient = algoliasearch(
  "Q7XICK98SI",
  "de8e0b025f44fb4a26d38156848d20ef"
);

type Product = {
  name: {
    "en-US": string;
  };
  productImage: {
    "en-US": ProductImage[];
  };
  material: {
    "en-US": string;
  };
};

export interface Hit {
  hit: {
    fields: Product;
    sys: {
      id: string;
    };
  };
}

const Hit = ({ hit }: Hit) => (
  <div
    className="d-flex pr-3 pt-3 pb-3 align-items-center"
    style={{ cursor: "pointer" }}
  >
    <Link href={`/shop/product/${hit.sys.id}`}>
      <img
        src={hit.fields.productImage["en-US"][0].url}
        style={{ width: "10%" }}
      />
    </Link>
    <div>
      <div attribute="name" hit={hit} tagName="mark" className="pl-2">
        {hit.fields.name["en-US"]}
      </div>
      <div
        attribute="material"
        hit={hit}
        tagName="mark"
        className="pl-2 font-italic text-muted"
      >
        {hit.fields.material["en-US"]}
      </div>
    </div>
  </div>
);

const Search = () => {
  return (
    <div className="w-100 border-bottom pb-4">
      <div className="container">
        <InstantSearch indexName="dev_ECOMMERCE" searchClient={searchClient}>
          <SearchBox />
          <Hits hitComponent={Hit} />
        </InstantSearch>
        <img src="https://res.cloudinary.com/surface-group/image/upload/v1613271155/search-by-algolia-light-background_jamw6m.svg" className="float-right" style={{width: '100px'}}/>

      </div>

    </div>
  );
};

export default Search;
