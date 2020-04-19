export interface Jobs {
  jobId: string;
  jobTitle: JobTitle;
  company: Company;
  wagePerHourInCents: number;
  milesToTravel: number;
  shifts: Shift[];
  branch: string;
  branchPhoneNumber: string;
  requirements?: string[];
}

export interface Shift {
  startDate: string;
  endDate: string;
}

export interface Company {
  name: string;
  address: Address;
  reportTo: ReportTo;
}

export interface ReportTo {
  name: string;
  phone?: string;
}

export interface Address {
  formattedAddress: string;
  zoneId: string;
}

export interface JobTitle {
  name: string;
  imageUrl: string;
}
