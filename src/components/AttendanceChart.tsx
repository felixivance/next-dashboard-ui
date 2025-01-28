"use client";

import Image from 'next/image';
import React from 'react';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tue',
    present: 70,
    absent: 40,
  },
  {
    name: 'Wed',
    present: 80,
    absent: 90,
  },
  {
    name: 'Thur',
    present: 30,
    absent: 10,
  },
  {
    name: 'Fri',
    present: 40,
    absent: 50,
  },
];
type Props = {};

const AttendanceChart = (props: Props) => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width="20" height="20" />
      </div>
      {/* chart */}
      <ResponsiveContainer width="100%" height="90%">
          <ResponsiveContainer >
            <BarChart
              width={500}
              height={300}
              data={data}
              barSize={20}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
              <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
              <YAxis   axisLine={false} />
              <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
              <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px", }}/>
              <Bar
                dataKey="absent"
                fill="#FAE27C"
                activeBar={<Rectangle fill="#FAE27C" stroke="blue" />}
                legendType="circle"
                radius={[10,10,0,0]}
              />
              <Bar
                dataKey="present"
                fill="#C3EBFA"
                activeBar={<Rectangle fill="#C3EBFA" stroke="purple" />}
                legendType='circle'
                radius={[10,10,0,0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ResponsiveContainer>

    </div>
  );
};

export default AttendanceChart;
