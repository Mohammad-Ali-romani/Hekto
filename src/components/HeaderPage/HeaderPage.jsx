import "./HeaderPage.scss";

const HeaderPage = ({ title }) => {
  return (
    <div className="header-page">
      <div className="container">
        <h1 className="title-header-page">{title}</h1>
        <p className="subtitle-header-page">
          Home . Pages . <span className="title-link">{title}</span>
        </p>
      </div>
    </div>
  );
};

export default HeaderPage;

/**
 * height: 286px
 * font-size title: 36px
 * font-style title: josefin sans
 * color title : #101750
 * font-size links: 16px
 */
