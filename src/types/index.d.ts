export interface RegisterInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface loginInputs {
  email: string;
  password: string;
}

export interface AuthState {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface TagType {
  id: string;
  title: string;
}

export interface VideoType {
  title: string;
  description: string;
  author: string;
  link: string;
  thumbnail: string;
  date: Date;
  duration: string;
  comments: [
    {
      id: string;
      title: string;
      name: string;
      email: string;
      date: Date;
      likes: string[];
    }
  ];
  views: string;
  tags: string[];
  logo: string;
  like: string[];
  dislike: string[];
  id: 45;
}
