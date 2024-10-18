import { getPrediction } from './controller/predictive-analytics-controller.js';

const setUpRoutes = (app) => {
    app.post('/api/predict', getPrediction);

    // Add more routes here
};

export default setUpRoutes;