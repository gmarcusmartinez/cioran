export interface IAlert {
  id: string;
  message: string;
  field: string;
  type: string;
}

export interface IProject {
  _id: string;
  photo: string;
  projectOwner: string;
  slug: string;
  sprints: ISprint[];
  team: string[];
  title: string;
}

export interface ISprint {
  _id: string;
  title: string;
  totalStoryPoints: number;
  project: string;
  createdAt: Date;
  tickets: [];
  startDate: Date;
  endDate: Date;
}

export interface ITicket {
  _id: string;
  title: string;
  ticketType: string;
  status: string;
  storyPoints: number;
  priority: string;
  description: string;
  sprint: { endDate: Date };
  project: { slug: string };
  assignedTo: { name: string };
  createdBy: string;
  dateAssigned: Date;
  dateCompleted: Date;
  createdAt: Date;
}

export interface IUser {
  _id: string;
  photo: string;
  projects: [];
  name: string;
  email: string;
  assignedTickets: [];
}
