import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function VariantSelect({
  product,
  options,
  selected,
  setSelected,
}) {
  const router = useRouter();

  // grabs id's from query and calls contentful function to grab entries and store them in state

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    console.log("options select use effect ran");

    router.push(selected);
  }, [selected]);

  return (
    <div className="form-group h-100 w-50">
      <label className="pb-1 text-muted">options:</label>
      <select
        onChange={handleChange}
        className="form-control"
        value={router.query.id}
        id="exampleFormControlSelect1"
      >
        <option value={router.query.id} disabled>
          {product.name}
        </option>
        {options.map((item) => (
          <option key={item.sys.id} value={item.sys.id}>
            {item.fields.name}
          </option>
        ))}
      </select>
    </div>
  );
}
