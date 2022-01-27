import { Date } from './date';
import { Localisation } from './localisation';
import { Log } from './log';

export interface People {
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    location: Localisation;
    dob: Date;
    registered: Date;
    email: string;
    login: Log;
    phone: string;
    cell: string;
    id: {
      name: any;
      value: string;
    };
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    nat: string;
  }