import "./FilterProduct.scss";
import * as Bi from "react-icons/bi";

const FilterProduct = () => {
  return (
    <div className="filter-product ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 className="title-filter-product">Ecommerce Acceories & Fashion Item</h4>
            <p className="description-filter-product">About 9,620 results (0.62 seconds)</p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end align-items-center">
              <label className="label-form-filter">Sort By:</label>
              <select name="sort" className="sort-filter" defaultValue='Best Match'>
                <option value="Best Match" disabled >Best Match</option>
                <option value="Acs">Acs</option>
                <option value="DESC">desc</option>
              </select>
              <label className="label-form-filter">View :</label>
              <button className="btn-icon-filter"><Bi.BiGridSmall /></button>
              <button className="btn-icon-filter"><Bi.BiListUl /></button>
              <input type="text" className="sort-filter"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
