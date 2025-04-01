import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>fiNder | Verified Nigerian Real Estate</title>
        <meta name="description" content="Find scam-free properties in Nigeria" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Dream Property in Nigeria
            </h1>
            <p className="text-xl mb-8">
              Verified listings. Secure transactions. No scams.
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by location..."
                  className="w-full py-4 px-6 rounded-full text-gray-800 focus:outline-none"
                />
                <button className="absolute right-2 top-2 bg-primary hover:bg-blue-700 text-white py-2 px-6 rounded-full transition">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How fiNder Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon: '🔍', title: 'Search', text: 'Filter verified properties'},
              {icon: '🛡️', title: 'Verify', text: 'KYC-checked agents'},
              {icon: '💰', title: 'Pay Safely', text: 'Escrow protection'}
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
                <span className="text-4xl mb-4 inline-block">{item.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}