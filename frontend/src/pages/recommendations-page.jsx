import React, { useState } from "react";
import Header from "../components/header";
const Recommendations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const allRecommendations = [
    {
      id: 1,
      title: "The Great Gatsby",
      description: "A classic novel by F. Scott Fitzgerald.",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJvb2t8ZW58MHx8fHwxNjE4OTAzMjY2&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 2,
      title: "Interstellar",
      description: "A science fiction film directed by Christopher Nolan.",
      image: "https://images.unsplash.com/photo-1504420371675-1dce5ab2ca03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJvb2t8ZW58MHx8fHwxNjE4OTAzMjY2&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 3,
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      image: "https://images.unsplash.com/photo-1518555543233-dce50f0d5a63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJvb2t8ZW58MHx8fHwxNjE4OTAzMjY2&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 4,
      title: "The Catcher in the Rye",
      description: "A novel by J. D. Salinger.",
      image: "https://images.unsplash.com/photo-1527799960183-4e6a2159a70e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJvb2t8ZW58MHx8fHwxNjE4OTAzMjY2&ixlib=rb-1.2.1&q=80&w=400",
    },
  ];

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setRecommendations([]);
    } else {
      // Simulate AI recommendation based on search term
      const filteredRecommendations = allRecommendations.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setRecommendations(filteredRecommendations);
    }
  };

  return (
    <div className="bg-white min-h-screen p-5 text-black">
      {/* Header */}
      <Header />
      <div className=" p-6 pt-20  text-center">
        <h1 className="text-3xl font-bold">Personalized Recommendations</h1>
        <p className="text-lg">Search for books, movies, or anything else!</p>
      </div>

      {/* Search Box */}
      <div className="flex flex-col md:flex-row justify-center py-10">
        <input
          type="text"
          className="w-full md:w-1/2 lg:w-1/3 p-3 border border-black rounded-lg text-black"
          placeholder="Search for books, movies, or anything..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="mt-4 md:mt-0 md:ml-4 p-3 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Search
        </button>
      </div>

      {/* Recommendations Section */}
      <section className="max-w-7xl mx-auto">
        {recommendations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                className="bg-gray-200 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={rec.image}
                  alt={rec.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-black">{rec.title}</h3>
                  <p className="text-gray-700">{rec.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            {searchTerm.trim()
              ? "No recommendations found. Try another search."
              : "Start searching to get personalized recommendations!"}
          </p>
        )}
      </section>
    </div>
  );
};

export default Recommendations;
