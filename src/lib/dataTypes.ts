export type Column = {
    header: string; // The header text for the column
    accessor: string; // The key used to access the data in the row
    className?: string; // Optional CSS class for the column
  };

  export type Teacher = {
    id: number;
    teacherId: string;
    name: string;
    email?: string;
    photo: string;
    phone:string;
    subjects: string[];
    classes:string[];
    address:string;
  }

  export type Student = {
    id:number;
    studentId: string;
    name:string;
    email: string;
    photo: string;
    phone?: string;
    grade: number;
    class: string;
    address:string;
  }

  export type Parent = {
    id:number;
    name:string;
    students: string[];
    email: string;
    phone: string;
    address: string;
  }

  export type Subject = {
    id:number;
    name: string;
    teachers: string[];
  }