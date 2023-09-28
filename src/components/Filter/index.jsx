/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Button from 'components/Button';

function Filter() {
  return (
    <div className="flex justify-between mt-5 border-b border-t py-3">
      <div className="flex gap-x-8">
        <div className="flex items-center">
          <p>Filter by</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <input type="radio" id="openCheck" name="openCheck" />
          <label htmlFor="openCheck">
            Open Now
          </label>
        </div>
        <div>
          <select name="price" id="price" className="rounded">
            <option value="">Price</option>
            <option value="largest">Largets</option>
            <option value="biggest">Biggest</option>
          </select>
        </div>
        <div>
          <select name="category" id="category" className="rounded">
            <option value="">Category</option>
            <option value="category1">Category1</option>
            <option value="category2">Category2</option>
            <option value="category3">Category3</option>
          </select>
        </div>
      </div>
      <div className="flex items-center">
        <Button text="CLEAR ALL" style="border border-gray-300 text-gray-400 text-sm hover:bg-gray-200 rounded" />
      </div>
    </div>
  );
}

export default Filter;
