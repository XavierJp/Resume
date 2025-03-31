export interface IExperience {
  title: string;
  period: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface IProject {
  name: string;
  timespan: string;
  tags: string[];
  description: string;
  img: string;
}

export interface IResume {
  experiences: IExperience[];
  projects: IProject[];
}
