export const TestimonyCard = () => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body flex items-center">
        {/* Testimonial Image */}
        <div className="avatar mr-4 py-2">
          <div className="w-16 rounded-full">
            <img src="https://placehold.co/150" alt="Person 1" />
          </div>
        </div>
        <div>
          <h3 className="card-title py-2">
            <q>Amazing tool!</q>
          </h3>
          <p>This app has completely transformed how our team collaborates.</p>
          <p className="text-sm text-gray-500 mt-2">
            - John Doe, Project Manager
          </p>
        </div>
      </div>
    </div>
  );
};
