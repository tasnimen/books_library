import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { getReadBooks } from '../localstorage/localstorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
          ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageToRead = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const readBooks = getReadBooks();

    const nameAndPages = readBooks.map(book => ({
      name: book.bookName,
      pages: book.totalPages,
    }));
    setChartData(nameAndPages);
  }, []);

  return (
    <div className="min-h-[calc(100vh-135px)] mb-4 bg-gray-100 max-w-6xl mx-auto rounded-xl  ">
      <h2 className="text-2xl font-bold text-center bg-gradient-to-r pt-6 bg-300% from-[#23BE0A] to-[#59C6D2] text-transparent bg-clip-text animate-gradient">Read Books - Total Pages</h2>

      <div className='md:p-12'>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pages" shape={<TriangleBar />} label={{ position: 'top' }}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PageToRead;
