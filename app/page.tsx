'use client';

import { useState } from 'react';
import { Search, Mic, ArrowUp, Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { BackgroundGradient } from '@/components/ui/background-gradient';

// Mock product data
const mockProducts = [
  {
    id: 1,
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 2453,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    discount: 12
  },
  {
    id: 2,
    name: "Apple AirPods Pro (2nd Generation)",
    price: 249.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviews: 1832,
    image: "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=400",
    discount: 0
  },
  {
    id: 3,
    name: "Bose QuietComfort 45 Headphones",
    price: 279.99,
    originalPrice: 329.99,
    rating: 4.6,
    reviews: 1245,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    discount: 15
  },
  {
    id: 4,
    name: "Samsung Galaxy Buds2 Pro",
    price: 199.99,
    originalPrice: 229.99,
    rating: 4.5,
    reviews: 892,
    image: "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=400",
    discount: 13
  },
  {
    id: 5,
    name: "Beats Studio3 Wireless Headphones",
    price: 179.99,
    originalPrice: 349.99,
    rating: 4.4,
    reviews: 1567,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    discount: 49
  },
  {
    id: 6,
    name: "Jabra Elite 85h Wireless Headphones",
    price: 159.99,
    originalPrice: 249.99,
    rating: 4.3,
    reviews: 743,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    discount: 36
  },
  {
    id: 7,
    name: "JBL Live 660NC Wireless Headphones",
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.2,
    reviews: 623,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    discount: 35
  },
  {
    id: 8,
    name: "Audio-Technica ATH-M50xBT2",
    price: 199.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviews: 2134,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    discount: 0
  },
  {
    id: 9,
    name: "Skullcandy Crusher Evo Wireless",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.1,
    reviews: 456,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    discount: 25
  },
  {
    id: 10,
    name: "Anker Soundcore Life Q30",
    price: 79.99,
    originalPrice: 79.99,
    rating: 4.4,
    reviews: 3421,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    discount: 0
  },
  {
    id: 11,
    name: "Sennheiser HD 450BT Wireless",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.3,
    reviews: 876,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    discount: 25
  },
  {
    id: 12,
    name: "Plantronics BackBeat Pro 2",
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.0,
    reviews: 234,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    discount: 50
  }
];

const suggestionQueries = [
  "Find me the best wireless headphones under $200",
  "Compare iPhone vs Samsung Galaxy features and prices",
  "What are the top-rated kitchen appliances for small spaces?",
  "Show me gaming laptops with good battery life",
  "Best smart home devices for beginners"
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      setSearchQuery(query);
      setShowResults(true);
      setDisplayedProducts(12);
    }
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedProducts(prev => prev + 12);
      setIsLoading(false);
    }, 1000);
  };

  const ProductCard = ({ product }: { product: any }) => (
    <BackgroundGradient className="rounded-[22px] p-1 group cursor-pointer">
      <Card className="bg-slate-800/90 border-0 rounded-[18px] overflow-hidden h-full transition-all duration-300 group-hover:scale-[1.02]">
        <CardContent className="p-0 h-full">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            {product.discount > 0 && (
              <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                -{product.discount}%
              </div>
            )}
            <button className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-black/80 transition-all duration-200 hover:scale-110">
              <Heart size={16} />
            </button>
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-white text-sm line-clamp-2 mb-3 group-hover:text-blue-300 transition-colors leading-relaxed">
              {product.name}
            </h3>
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-yellow-400 text-sm ml-1 font-medium">{product.rating}</span>
              </div>
              <span className="text-gray-400 text-sm ml-2">({product.reviews.toLocaleString()})</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-white font-bold text-lg">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
                )}
              </div>
              <Button size="sm" className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                <ShoppingCart size={14} className="mr-1" />
                Add
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </BackgroundGradient>
  );

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-lg">S</span>
                </div>
                <span className="text-white font-bold text-xl">SmartSearch</span>
              </div>
              <nav className="hidden md:flex space-x-6">
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                Sign In
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {showResults ? (
          /* Results Layout - ChatGPT Style */
          <>
            {/* Results Area - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Results Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Results for "{searchQuery}"
                  </h2>
                  <p className="text-gray-400 text-lg">
                    Found {mockProducts.length} products matching your search
                  </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
                  {mockProducts.slice(0, displayedProducts).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Load More Button */}
                {displayedProducts < mockProducts.length && (
                  <div className="text-center pb-32">
                    <Button
                      onClick={handleLoadMore}
                      disabled={isLoading}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                    >
                      {isLoading ? 'Loading...' : 'Load More Products'}
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Fixed Search Bar at Bottom */}
            <div className="flex-shrink-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Ask anything about products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                    className="w-full h-14 px-6 pr-20 bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 text-lg rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                      <Mic size={20} />
                    </button>
                    <button
                      onClick={() => handleSearch(searchQuery)}
                      className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
                    >
                      <ArrowUp size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Landing Page - Centered */
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Meet AI Search
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Ask detailed questions for better product recommendations
              </p>

              {/* Border Glowing Search Input */}
              <div className="relative max-w-2xl mx-auto mb-12">
                {/* Glowing border effect - only shows when search is empty */}
                {!searchQuery && (
                  <div className="absolute inset-0 rounded-2xl p-[2px]">
                    {/* Animated glowing border layers */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-blue-500 opacity-75 animate-pulse"></div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-blue-400 opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-cyan-400 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    {/* Inner background to create border effect */}
                    <div className="absolute inset-[2px] rounded-2xl bg-slate-800/50"></div>
                  </div>
                )}

                <div className="relative z-10">
                  <Input
                    type="text"
                    placeholder="Ask anything about products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                    className={`w-full h-16 px-6 pr-20 text-white placeholder-gray-400 text-lg rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg transition-all duration-300 ${!searchQuery
                        ? 'bg-transparent border-transparent'
                        : 'bg-slate-800/50 border-slate-700'
                      }`}
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                      <Mic size={20} />
                    </button>
                    <button
                      onClick={() => handleSearch(searchQuery)}
                      className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
                    >
                      <ArrowUp size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Suggestion Cards */}
              <div className="space-y-4 max-w-2xl mx-auto">
                {suggestionQueries.map((query, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(query)}
                    className="w-full text-left p-4 bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700 rounded-xl text-gray-300 hover:text-white transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg"
                  >
                    <div className="flex items-center">
                      <Search size={16} className="mr-3 text-gray-400" />
                      {query}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}