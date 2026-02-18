export interface Jobdetails {
    id: number;
    title: string;
    company: string;
    department?: string;
    location: string;
    rate: string;
    contractType: 'CDD' | 'CDI';
    link: string;
    status: 'saved' | 'sended' | 'negative' | 'positive';
    deadline?: Date;
    sentAt?: Date;
    interviewAt?: Date;
}
