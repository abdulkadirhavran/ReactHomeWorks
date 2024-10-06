import styles from "./card.module.scss";


// eslint-disable-next-line react/prop-types
const Card = ({ icon, title, description }) => {  //Bu satırda parantez içine PROP-erties yazıyoruz,Card içeriğinde kullanacağımız properties ekliyoruz aslında
  return (
    <div className="col-lg-6 col-xxl-4 mb-5">
      <div className="card bg-light border-0 h-100">
        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
          <div
            className={`feature bg-danger bg-gradient text-white rounded-3 mb-4 mt-n4 ${styles.cardFormat}`}
          >
            <i className={`bi ${icon}`}></i>
          </div>
          <h2 className="fs-4 fw-bold">{title}</h2>
          <p className="mb-0">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
