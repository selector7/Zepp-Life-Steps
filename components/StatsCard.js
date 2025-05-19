import React from 'react';

const StatsCard = ({ title, value }) => {
  return (
    <div className="glass p-4 rounded-lg m-4 w-48">
      <p className="text-sm text-gray-300">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
};

export default StatsCard;
