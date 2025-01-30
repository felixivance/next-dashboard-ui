import BigCalendar from '@/components/BigCalendar';
import Performance from '@/components/Performance';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const SingleTeacherPage = (props: Props) => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* left  */}
      <div className="w-full xl:w-2/3 rounded-lg">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-sky py-6 px-4 rounded-md flex-1 flex gap-2">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1140"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 w-2/3 justify-between">
              <div>
                <h1 className="text-xl font-semibold">Felix Teacher</h1>
                <p className="text-sm text-gray-500"> Lorem ipsum</p>
              </div>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="flex gap-2 items-center w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <p>A+</p>
                </div>
                <div className="flex gap-2 items-center w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/calendar.png" alt="" width={14} height={14} />
                  <p>Jan 1425</p>
                </div>
                <div className="flex gap-2 items-center w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <p>email@example.com</p>
                </div>
                <div className="flex gap-2 items-center w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <p>+123455</p>
                </div>
              </div>
            </div>
          </div>
          {/* small cards */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* card */}
            <div className="bg-white p-4 rounded-md flex items-center gap-2 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm">Attendance</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md flex items-center gap-2 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2%</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md flex items-center gap-2 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6%</h1>
                <span className="text-sm">Lessons</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md flex items-center gap-2 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teachers Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-skyLight" href="/">
              Teacher&apos;s Classes
            </Link>
            <Link className="p-3 rounded-md bg-purpleLight" href="/">
              Teacher&apos;s Students
            </Link>
            <Link className="p-3 rounded-md bg-yellowLight" href="/">
              Teacher&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
              Teacher&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-skyLight" href="/">
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
