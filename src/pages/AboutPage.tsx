const AboutPage = () => {
  return (
    <div className="space-y-12">

      {/* Hero Section */}

      <section className="bg-gray-50 shadow-lg rounded-xl p-8">

        <h1 className="text-4xl font-bold text-orange-400 mb-4">
          About MiniMarketPlace
        </h1>

        <p className="text-gray-600 leading-8">
          We provide premium sports accessories designed for athletes,
          fitness enthusiasts, and anyone who wants to achieve their
          personal best. Our mission is to deliver high-quality
          equipment that inspires confidence and performance.
        </p>

      </section>

      {/* Why Choose Us */}

      <section>

        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-50 shadow-lg rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-semibold mb-2">
              Premium Quality
            </h3>
            <p>
              Carefully selected sports accessories built for
              durability and performance.
            </p>
          </div>

          <div className="bg-gray-50 shadow-lg rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-semibold mb-2">
              Fast Delivery
            </h3>
            <p>
              Quick and reliable shipping to get your gear on time.
            </p>
          </div>

          <div className="bg-gray-50 shadow-lg rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">💪</div>
            <h3 className="font-semibold mb-2">
              Trusted By Athletes
            </h3>
            <p>
              Thousands of customers choose us for their training needs.
            </p>
          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="bg-orange-50 rounded-xl p-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <h3 className="text-3xl font-bold text-orange-400">
              500+
            </h3>
            <p>Products</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-400">
              10K+
            </h3>
            <p>Customers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-400">
              50+
            </h3>
            <p>Brands</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-400">
              99%
            </h3>
            <p>Satisfaction</p>
          </div>

        </div>

      </section>

      {/* Mission */}

      <section className="bg-gray-50 shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-semibold mb-4">
          Our Mission
        </h2>

        <p className="text-gray-600 leading-8">
          Our goal is to make high-quality sports equipment accessible
          to everyone. Whether you are a beginner or a professional
          athlete, we believe the right equipment can help unlock your
          full potential.
        </p>

      </section>

      {/* CTA */}

      <section className="text-center bg-gray-50 shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-bold mb-4">
          Ready To Level Up Your Training?
        </h2>

        <p className="mb-5 text-gray-600">
          Explore our collection and find the perfect gear for your
          next challenge.
        </p>

        <button className="bg-orange-400 text-white px-6 py-3 rounded-lg hover:shadow-lg cursor-pointer">
          Shop Now
        </button>

      </section>

    </div>
  );
};

export default AboutPage;