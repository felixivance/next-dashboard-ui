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