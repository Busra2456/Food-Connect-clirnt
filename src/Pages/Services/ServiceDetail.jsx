import { Link, useLoaderData } from "react-router-dom";

const ServiceDetail = () => {
  const serviceDetail = useLoaderData();
  console.log('serviceDetail:', serviceDetail);


  const {
      _id,
    estate_title,
    image,
    description,
    recipe={} } = serviceDetail 
    const { ingredients = [], instructions = [] } = recipe


  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          className="w-full h-96 object-cover"
          src={image}
          alt=""
        />
        <div className="p-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {estate_title}
          </h2>

          <p className="text-gray-500 text-[11px] mb-6 max-w-xl mx-auto">{description}</p>

          <div className="text-left space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Ingredients</h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {ingredients.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <hr />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Instructions</h3>
              <ol className="list-decimal list-inside text-gray-600 mt-2">
             {instructions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            </div>
          </div>

      

         <Link  to={`/ServiceDetails/${_id}`}> <button className="btn bg-linear-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full mt-4 text-white text-xl font-bold px-10 py-3 rounded-lg hover:scale-105 transition-all duration-300">
            Buy Now
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
