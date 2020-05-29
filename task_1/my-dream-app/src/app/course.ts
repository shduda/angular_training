export interface ICourse {
    Id: number;
    Title: string;
    CreationDate: Date;
    Duration: number;
    Description: string;
}

export class Course implements ICourse {
    Id: number;
    Title: string;
    CreationDate: Date;
    Duration: number;
    Description: string;
}