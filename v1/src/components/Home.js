import { Navbar } from "./Navbar";
import { PageHeader } from "./PageHeader";


const CATEGORIES= [
  {
    id:1,
    name:"Meat",
    imgUrl:"https://source.unsplash.com/YlAmh_X_SsE",
    imgAlt:"meat_image"
  },
  {
    id:2,
    name:"Fruits",
    imgUrl:"https://source.unsplash.com/-gOUx23DNks",
    imgAlt:"fruits_image"
  },
  {
    id:3,
    name:"Seafood",
    imgUrl:"https://source.unsplash.com/N6BTNbaKZMo",
    imgAlt:"seafood_image"
  },
  {
    id:4,
    name:"Deserts",
    imgUrl:"https://source.unsplash.com/6SMF42-JTAc",
    imgAlt:"deserts_image"
  },
  {
    id:5,
    name:"Beverages",
    imgUrl:"https://source.unsplash.com/jcLcWL8D7AQ",
    imgAlt:"beverage_image"
  },
  {
    id:5,
    name:"Dairy",
    imgUrl:"https://source.unsplash.com/lAueE1Zf9tY",
    imgAlt:"dairy_image"
  }
]



export const Home = () => {
  return (
    <div className="min-h-full">
      <Navbar />
      <PageHeader title={"Product Category"} />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Replace with content */}
          <div className="px-4 py-4 sm:px-0 grid sm:grid-cols-2 gap-4 md:grid-cols-3">

            {CATEGORIES.map(category =>
              <div key={category.id} className="relative h-20 mb-8 border rounded-lg shadow-red">
                <img className="opacity-50 object-cover h-20 w-full rounded-lg" src={category.imgUrl} alt={category.imgAlt}/>
                <h1 class="absolute text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> {category.name}</h1>
              </div>       
            )}

          </div>
        </div>
      </main>
    </div>
  );
};
