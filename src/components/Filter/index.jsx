/* eslint-disable react/prop-types */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import Button from 'components/Button';

function Filter({ onFilterChange }) {
  const [isCheck, setIsCheck] = useState(false);
  const [openNow, setIsOpenNow] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleOpenChange = () => {
    setIsCheck(!isCheck);
  };

  const handlePriceChange = (event) => {
    const result = event.target.value;
    setSelectedPrice(result);
  };

  const handleCategoryChange = (event) => {
    const result = event.target.value;
    setSelectedCategory(result);
  };

  const handleClearFilter = () => {
    setIsCheck(false);
    setIsOpenNow('');
    setSelectedCategory('');
    setSelectedPrice('');
  };

  const applyFilter = () => {
    const filters = {
      openNow,
      price: selectedPrice,
      category: selectedCategory,
    };
    onFilterChange(filters);
  };

  useEffect(() => {
    if (isCheck) {
      setIsOpenNow('Open Now');
    } else {
      setIsOpenNow('');
    }
  }, [isCheck]);

  useEffect(() => {
    applyFilter();
  }, [openNow, selectedCategory, selectedPrice]);

  return (
    <div className="flex justify-between mt-5 border-b border-t py-3">
      <div className="flex gap-x-8">
        <div className="flex items-center">
          <p>Filter by</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <input
            type="checkbox"
            id="openCheck"
            name="openCheck"
            checked={isCheck}
            onChange={handleOpenChange}
          />
          <label htmlFor="openCheck">
            Open Now
          </label>
        </div>
        <div>
          <select
            name="price"
            id="price"
            className="rounded"
            value={selectedPrice}
            onChange={handlePriceChange}
          >
            <option value="">Price</option>
            <option value="largest">Largets</option>
            <option value="biggest">Biggest</option>
          </select>
        </div>
        <div>
          <select
            name="category"
            id="category"
            className="rounded"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Category</option>
            <option value="category1">Category1</option>
            <option value="category2">Category2</option>
            <option value="category3">Category3</option>
          </select>
        </div>
      </div>
      <div className="flex items-center">
        <Button
          onClick={handleClearFilter}
          text="CLEAR ALL"
          style="border border-gray-300 text-gray-400 text-sm hover:bg-gray-200 rounded"
        />
      </div>
    </div>
  );
}

export default Filter;
