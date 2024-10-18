import React, { useState } from "react";
import axios from "axios";
import Header from "../components/header";
import { Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faDownload, faSpinner } from "@fortawesome/free-solid-svg-icons";
import 'chart.js/auto';  // Needed for chart.js to work properly

const PredictiveAnalytics = () => {
  const [dataInput, setDataInput] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner

    try {
      const response = await axios.post("http://localhost:3000/api/predict", { dataInput });
      setPrediction(response.data.prediction);
      setChartData({
        labels: ["Current", "Predicted"],
        datasets: [
          {
            label: "Data",
            data: [Number(dataInput), response.data.prediction],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
    
    setLoading(false); // Hide loading spinner after fetching
  };

  return (
    <div>

        <div>
            <Header />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Header */}
        <div className="text-4xl md:text-6xl lg:text-6xl font-bold mt-10 text-center">
            Predictive Analytics Dashboard
        </div>
        <p className="text-lg text-gray-600 mt-2 text-center">
            Analyze trends and forecast future outcomes with real-time data.
        </p>

        {/* Form for user input */}
        <div className="w-full max-w-sm md:max-w-3xl lg:md:max-w-3xl mt-10">
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <label className="text-xl md:text-2xl font-semibold mb-5 text-center">
                Enter Data Point
            </label>
            <input
                type="number"
                placeholder="Input a number"
                value={dataInput}
                onChange={(e) => setDataInput(e.target.value)}
                className="input input-bordered w-full max-w-xs mb-4 px-4 py-2"
                required
            />
            <button type="submit" className="btn btn-primary w-full max-w-xs">
                <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                Get Prediction
            </button>
            </form>
        </div>

        {/* Loading Spinner */}
        {loading && (
            <div className="text-center mt-10">
            <FontAwesomeIcon icon={faSpinner} spin className="text-3xl text-gray-500" />
            <p>Fetching prediction...</p>
            </div>
        )}

        {/* Display Prediction Result */}
        {prediction !== null && (
            <div className="mt-10 w-full max-w-lg">
            <h2 className="text-2xl font-bold text-center">Prediction Result</h2>
            <p className="text-center text-lg mt-3">
                The predicted value is:{" "}
                <span className="font-semibold text-blue-600">{prediction}</span>
            </p>

            {/* Chart Display */}
            <div className="mt-6">
                {chartData && (
                <Line
                    data={chartData}
                    options={{
                    scales: {
                        y: {
                        beginAtZero: true,
                        },
                    },
                    }}
                />
                )}
            </div>

            {/* Downloadable Report Button */}
            <div className="text-center mt-8">
                <button className="btn btn-outline w-full max-w-xs">
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download Report
                </button>
            </div>
            </div>
        )}
        </div>
    </div>
  );
};

export default PredictiveAnalytics;
