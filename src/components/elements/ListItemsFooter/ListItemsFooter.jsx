import "./list-items-footer.scss";

const ListItemsFooter = ({ title, items }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="list-items-footer mt-3 mt-lg-0">
        <h4 className="title">{title}</h4>
        <ul className="list-items mt-4 mb-0">
          {items.map((item) => (
            <li className="item"><a href="#">{item}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListItemsFooter;
