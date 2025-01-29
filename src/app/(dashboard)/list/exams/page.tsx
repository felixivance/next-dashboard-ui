import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { examsData, role, studentsData, teachersData } from '@/lib/data';
import { Column, Exam, Student, Teacher } from '@/lib/dataTypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const columns: Column[] = [
  {
    header: 'Id',
    accessor: 'id',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Subject',
    accessor: 'subject',
    className: 'text-center',
  },
  {
    header: 'Class',
    accessor: 'class',
    className: 'text-left',
  },
  {
    header: 'Teacher',
    accessor: 'teacher',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Date',
    accessor: 'date',
    className: '',
  },
  {
    header: 'Actions',
    accessor: 'action',
  },
];

const ExamsListPage = (props: Props) => {
  const renderRow = (item: Exam) => {
    return (
      <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight'>
        
        <td className="hidden md:table-cell">{item.id}</td>
        <td className="p-4 text-center">{item.subject}</td>
        <td className="text-left">{item.class}</td>
        <td className="hidden md:table-cell">{item.teacher}</td>
        <td className="">{item.date}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
                <Image src="/view.png" alt="" width={16} height={16} />
              </button>
            </Link>
            {role === 'admin' && (
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple">
                <Image src="/delete.png" alt="" width={16} height={16} />
              </button>
            )}
          </div>
        </td>
      </tr>
    );
  };
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Exams</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* list */}
      <div className=''>
      <Table columns={columns} renderRow={renderRow} data={examsData} />
      </div>
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default ExamsListPage;
