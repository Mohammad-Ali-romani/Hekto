import "./FilterProduct.scss";
import * as Bi from "react-icons/bi";

const FilterProduct = ({ products, setProducts }) => {
  // return data products
  async function fetchData() {
    let data = await fetch("server/products.json");
    return await data.json();
  }
  // sort products
  function sortProduct(event) {
    let data = products;
    if (event.target.value === "Acs") {
      data.sort(function (a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    } else if (event.target.value === "DESC") {
      data.reverse(function (a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }
    setProducts([...data]);
  }
  // search products
  async function searchProduct(event) {
    let fData = await fetchData();
    let data = fData.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(`${event.target.value}`.toLowerCase());
    });
    if (event.target.value !== "") setProducts([...data]);
  }
  return (
    <div className="filter-product">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 className="title-filter-product">
              Ecommerce Acceories & Fashion Item
            </h4>
            <p className="description-filter-product">
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end align-items-center">
              <label className="label-form-filter">Sort By:</label>
              <select
                name="sort"
                className="sort-filter"
                defaultValue="Best Match"
                onInput={sortProduct}
              >
                <option value="Best Match" disabled>
                  Best Match
                </option>
                <option value="Acs">Acs</option>
                <option value="DESC">desc</option>
              </select>
              <label className="label-form-filter">View :</label>
              <button className="btn-icon-filter">
                <Bi.BiGridSmall />
              </button>
              <button className="btn-icon-filter">
                <Bi.BiListUl />
              </button>
              <input
                type="text"
                className="sort-filter"
                onInput={searchProduct}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
