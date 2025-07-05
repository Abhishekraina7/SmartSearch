'use client';

import { useState } from 'react';
import { Search, Mic, ArrowUp, Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

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
    <Card className="group bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {product.discount > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              -{product.discount}%
            </div>
          )}
          <button className="absolute top-2 right-2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors">
            <Heart size={16} />
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-white text-sm line-clamp-2 mb-2 group-hover:text-blue-400 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-yellow-400 text-sm ml-1">{product.rating}</span>
            </div>
            <span className="text-gray-400 text-sm ml-2">({product.reviews})</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold text-lg">${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
              )}
            </div>
            <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-black">
              <ShoppingCart size={14} className="mr-1" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">W</span>
                </div>
                <span className="text-white font-bold text-xl">Walmart</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">AI Search</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">All Products</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Categories</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Deals</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                Sign In
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showResults ? (
          /* Hero Section */
          <div className="text-center py-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet AI Search
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ask detailed questions for better product recommendations
            </p>
            
            {/* Search Input */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Ask anything about products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                  className="w-full h-16 px-6 pr-20 bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 text-lg rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-white transition-colors">
                    <Mic size={20} />
                  </button>
                  <button 
                    onClick={() => handleSearch(searchQuery)}
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
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
                  className="w-full text-left p-4 bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700 rounded-xl text-gray-300 hover:text-white transition-all duration-200 hover:border-blue-500/50"
                >
                  <div className="flex items-center">
                    <Search size={16} className="mr-3 text-gray-400" />
                    {query}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Search Results */
          <div className="py-8">
            {/* Static Search Bar */}
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm py-4 mb-8 border-b border-slate-800">
              <div className="relative max-w-2xl mx-auto">
                <Input
                  type="text"
                  placeholder="Ask anything about products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                  className="w-full h-12 px-6 pr-20 bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <button className="p-1 text-gray-400 hover:text-white transition-colors">
                    <Mic size={16} />
                  </button>
                  <button 
                    onClick={() => handleSearch(searchQuery)}
                    className="p-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                  >
                    <ArrowUp size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Results for "{searchQuery}"
              </h2>
              <p className="text-gray-400">
                Found {mockProducts.length} products matching your search
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {mockProducts.slice(0, displayedProducts).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More Button */}
            {displayedProducts < mockProducts.length && (
              <div className="text-center">
                <Button
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
                >
                  {isLoading ? 'Loading...' : 'Load More Products'}
                </Button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}