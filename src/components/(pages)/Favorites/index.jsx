import { useEffect, useState } from "react";
import downloadImage from "../../../utils";
import Download from "../../../assets/download.png";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  return (
    <section className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Favorite Images
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px]">
          Browse your favorite generated images
        </p>
      </div>

      <div className="mt-10">
        {favorites && favorites.length > 0 ? (
          <div className="grid sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
            {favorites.map((post) => (
              <div
                className="rounded-xl group relative shadow-card hover:shadow-cardhover card"
                key={post._id}
              >
                <img
                  className="w-full h-auto object-contain rounded-xl"
                  src={post.photo}
                  alt={post.prompt}
                />
                <div className="group-hover:flex flex-col max-h-96 hidden absolute bottom-0 left-0 right-0 bg-[#0000009c] m-2 p-4 rounded-xl transition ease-in delay-150">
                  <p className="text-white text-sm overflow-y-auto prompt">
                    {post.prompt}
                  </p>

                  <div className="mt-5 flex justify-between items-center gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full object-cover bg-lime-500  flex justify-center items-center text-white text-xs font-bold">
                        {post.name[0]}
                      </div>
                      <p className="text-white text-sm">{post.name}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => downloadImage(post._id, post.photo)}
                      className="outline-none bg-transparent border-none"
                    >
                      <img
                        src={Download}
                        alt="download"
                        className="w-6 h-6 object-contain invert"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">
            No Favorites Yet
          </h2>
        )}
      </div>
    </section>
  );
};

export default Favorites;
