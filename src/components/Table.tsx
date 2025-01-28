import { Column } from '@/lib/dataTypes';
import React from 'react';

type Props = {
  columns: Column[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
};

const Table = ({ columns, data, renderRow }: Props) => {
  return (
    <table  className=" w-full mt-4 ">
        <thead>
          <tr className="text-left text-gray-500 text-sm">
            {columns.map((column, index) => (
              <th key={column.accessor} className={column.className}> {column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((item) => renderRow(item))}</tbody>
      </table>
  );
};

export default Table;
