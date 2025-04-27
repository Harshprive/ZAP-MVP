import React, { useState } from 'react';
import { Search, ArrowUpDown, Filter, ShoppingCart, Package } from 'lucide-react';

const PrerequisitesList = () => {
  const [items, setItems] = useState([
    { id: 1, item: 'PVC Pipe', quantity: 2, unit: 'm', category: 'Plumbing' },
    { id: 2, item: 'Water Tap', quantity: 1, unit: 'pieces', category: 'Fixtures' },
    { id: 3, item: 'Thread Seal Tape', quantity: 1, unit: 'boxes', category: 'Supplies' },
    { id: 4, item: 'Pipe Wrench', quantity: 2, unit: 'pieces', category: 'Tools' }
    
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('item');
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(items.map(item => item.category))];

  // Sort items
  const sortItems = (a, b) => {
    if (sortField === 'quantity') {
      const valA = a.quantity;
      const valB = b.quantity;
      return sortDirection === 'asc' ? valA - valB : valB - valA;
    }

    const valA = a[sortField].toString().toLowerCase();
    const valB = b[sortField].toString().toLowerCase();
    return sortDirection === 'asc' ?
      valA.localeCompare(valB) :
      valB.localeCompare(valA);
  };

  // Filter and sort items
  const filteredItems = items
    .filter(item =>
      item.item.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || item.category === selectedCategory)
    )
    .sort(sortItems);

  // Toggle sort
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handlePreOrder = () => {
    console.log('Pre-order items:', items);
    // Add pre-order logic here
  };

  const handleSelfBuy = () => {
    console.log('Self-buy items:', items);
    // Add self-buy logic here
  };

  return (<div className='flex justify-center'>
    <div className="  w-[80vw] my-7 rounded-xl bg-gray-50 ">
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Required Items List</h1>

          {/* Search and Filter Bar */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex w-[100%] border rounded-lg">
                <div className="flex w-[90%]   focus:ring-2 border-none pl-2 ">
                    <Search className="flex h-[100%] " size={20} />
                    <input
                  type="text"
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-1 pr-4 py-2 border-none  focus:ring-blue-500 outline-none"
                /></div>
              </div>

              {/* Category Filter */}
              <div className="flex w-[25%]">
                <div className="flex w-[70%]  rounded-lg focus:ring-2 border pl-2 ">
                  <Filter className=" flex h-[100%] text-gray-400" size={20} />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-9 py-2 border-none rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      className="px-6 py-3 text-left cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('item')}
                    >
                      <div className="flex items-center gap-2">
                        Item Name
                        <ArrowUpDown size={16} className="text-gray-400" />
                      </div>
                    </th>
                    <th
                      className="px-6 py-3 text-left cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('quantity')}
                    >
                      <div className="flex items-center gap-2">
                        Quantity
                        <ArrowUpDown size={16} className="text-gray-400" />
                      </div>
                    </th>
                    <th
                      className="px-6 py-3 text-left cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('category')}
                    >
                      <div className="flex items-center gap-2">
                        Category
                        <ArrowUpDown size={16} className="text-gray-400" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{item.item}</td>
                      <td className="px-6 py-4">
                        {item.quantity} {item.unit}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {item.category}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No items found matching your criteria</p>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="mt-6 bg-white rounded-lg shadow p-4">
            <p className="text-gray-600">
              Total Items: {filteredItems.length} of {items.length}
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Buttons */}
      
      
    </div>
  </div>
    
  );
};

export default PrerequisitesList;
