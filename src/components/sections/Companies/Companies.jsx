import "./Companies.scss";
import companies from "./../../../assets/images/Home Page/companies.png";

const Companies = () => {
  return (
    <section className="companies text-center">
      <img src={companies} alt="" className="image-companies" />
    </section>
  );
};

export default Companies;
