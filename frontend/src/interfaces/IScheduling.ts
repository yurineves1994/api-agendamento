export interface IScheduling {
  id: string,
  employeeName?: string;
  titleEvent?: string,
  title?: string;
  description?: string;
  date: string;
  duration?: string;
  clientName?: string;
  clientPhone?: string;
  clientEmail?: string;
}

export interface IEventScheduling {
  event: IScheduling;
  onClose: () => void;
}