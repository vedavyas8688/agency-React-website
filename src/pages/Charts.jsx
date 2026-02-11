import React from "react";
import Chart from "react-apexcharts";

const Charts = () => {
  const commonOptions = {
    chart: {
      toolbar: { show: false },
            zoom: { enabled: false },

    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" },
    grid: { borderColor: "#f1f5f9" },
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* chart1 line */}

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <Chart
            options={{
              ...commonOptions,
              xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
            }}
            series={[{ name: "Sales", data: [30, 40, 35, 50, 49] }]}
            type="line"
            height={300}
          />
        </div>

        {/* chart2 DASHED LINE */}

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h4 className="text-lg font-semibold mb-4"> DASHED LINE</h4>
          <Chart
            options={{
              ...commonOptions,
              stroke: { dashArray: 6 },
              xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
            }}
            series={[{ name: "Revenue", data: [20, 35, 45, 30, 60] }]}
            type="line"
            height={300}
          />
        </div>

        {/* chart3 area */}

        <div className="bg-white rounded-2xl shadow-md p-6 ">
          <h4 className="text-lg font-semibold mb-4">Area</h4>
          <Chart
            options={{
              ...commonOptions,
              xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
            }}
            series={[{ name: "Visitors", data: [10, 20, 15, 30, 25] }]}
            type="area"
            height={300}
          />
        </div>

        {/* chart4 column */}

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h4 className="text-lg font-semibold mb-4 ">Coloumn</h4>

          <Chart
            options={{
              ...commonOptions,
              xaxis: { categories: ["Q1", "Q2", "Q3", "Q4"] },
            }}
            series={[{ name: "Profit", data: [1100, 4230, 1480, 4070] }]}
            type="bar"
            height={300}
          />
        </div>

        {/* chart-5 horizantal bar */}

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h4 className="text-lg font-semibold mb-4">Horizantal Bar</h4>
          <Chart
            options={{
              ...commonOptions,
              plotOptions: { bar: { horizontal: true } },
              xaxis: { categories: ["SEO", "Design", "Dev", "Marketing"] },
            }}
            series={[{ name: "Projects", data: [44, 45, 41, 67] }]}
            type="bar"
            height={300}
          />
        </div>
        {/* Chart 6 - Mixed */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h4 className="text-lg font-semibold mb-4">Chart 6</h4>
          <Chart
            options={{
              ...commonOptions,
              xaxis: { categories: ["Jan", "Feb", "Mar", "Apr"] },
            }}
            series={[
              { name: "Income", type: "column", data: [23, 11, 22, 27] },
              { name: "Expenses", type: "line", data: [30, 25, 36, 30] },
            ]}
            type="line"
            height={300}
          />
        </div>

        {/* Chart 7 - Radial */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h4 className="text-lg font-semibold mb-4">Chart 7</h4>
          <Chart
            options={{ labels: ["Progress"] }}
            series={[75]}
            type="radialBar"
            height={300}
          />
        </div>

        {/* Chart 8 - Pie */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h4 className="text-lg font-semibold mb-4">Chart 8</h4>
          <Chart
            options={{ labels: ["SEO", "Dev", "Design"] }}
            series={[44, 55, 13]}
            type="pie"
            height={300}
          />
        </div>

        {/* chart 10 donut */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h4 className="text-lg font-semibold mb-4">Chart 9</h4>
          <Chart
            options={{ labels: ["Desktop", "Mobile", "Tablet"] }}
            series={[60, 30, 10]}
            type="donut"
            height={300}
          />
        </div>
        {/* 11 Scatter */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h4 className="text-lg font-semibold mb-4">Scatter chart-9</h4>

          <Chart
            options={{ ...commonOptions }}
            series={[
              {
                name: "Dataset",
                data: [
                  [10, 20],
                  [20, 40],
                  [30, 35],
                  [40, 50],
                ],
              },
            ]}
            type="scatter"
            height={300}
          />
        </div>
        {/* 12 Bubble */}

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h4 className="text-lg font-semibold mb-4">Scatter chart-9</h4>
          <Chart
            options={{ ...commonOptions }}
            series={[
              {
                name: "Bubble Data",
                data: [
                  [10, 20, 15],
                  [20, 30, 25],
                  [15, 10, 20],
                ],
              },
            ]}
            type="bubble"
            height={300}
          />
        </div>


        {/* example */}
        
      </div>
    </div>
  );
};

export default Charts;
