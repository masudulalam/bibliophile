import bannerImage from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 px-28 py-20 rounded-3xl mt-11 mb-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImage}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-success text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
