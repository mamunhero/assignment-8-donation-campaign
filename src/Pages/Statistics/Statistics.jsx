import { useEffect, useState } from 'react';
import { PieChart, Pie } from 'recharts';

const Statistics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from a different JSON file
    fetch('donation.json')
      .then(response => response.json())
      .then(data => {
        setData(data.donations);
      })
  }, []);

  const donateButton = JSON.parse(localStorage.getItem("donate")) || [];

  // Create an array of objects with 'name', 'value', and 'color' properties
  const pieChartData = [
    { name: 'Data Count', value: data.length, color: '#00C49F' },
    { name: 'Stored Data Count', value: donateButton.length, color: '#FF444A' },
  ];

  return (
    <div className='sm:text-center md:text-left'>
      <h2 className='text-5xl font-bold'>Data Count: {data.length}</h2>
      <h2 className='text-5xl font-bold'>Stored Data Count: {donateButton.length}</h2>
      <PieChart width={400} height={400}>
        <Pie data={pieChartData} dataKey="value"  outerRadius={60} fill="#8884d8" />
        <Pie data={pieChartData} dataKey="value"  innerRadius={70} outerRadius={90} fill="#82ca9d" label />
      </PieChart>
    </div>
  );
};

export default Statistics;



