export type Resource = {
  type: string;
  url: string;
};

export type VolunteerItem = {
  title: string;
  organization: string;
  description: string;
  fromDate: string;
  toDate: string;
  resources?: Resource[];
};

export type CompetitionDetail = {
  type: string;
  award: string;
  role?: string;
  teamName?: string;
  projectName?: string;
};

export type Competition = {
  name: string;
  type: string;
  country: string;
  detail?: CompetitionDetail;
  date: string;
  resources?: Resource[];
};

export type Oversea = {
  name: string;
  country: string;
  place: string;
  resources?: Resource[];
};

export type Speaker = {
  name: string;
  country: string;
  resources?: Resource[];
};

export type Volunteer = {
  pin: null | VolunteerItem;
  items: VolunteerItem[];
};

export type ActivitiesData = {
  competitions: Competition[];
  overseas: Oversea[];
  speaker: Speaker[];
};

export type ProfessionalExperience = {
  company: string;
  country: string;
  position: string;
  startDate: string;
  endDate: string | 'Present';
  highlights: string[];
};

export type EducationExperience = {
  school: string;
  degree: string;
  fieldOfStudy: string;
  images: string[];
  startDate: string;
  endDate: string;
  courses: string[];
};

export type Social = {
  name: string;
  url: string;
  icon: string;
};
