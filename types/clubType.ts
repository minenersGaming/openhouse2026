export type ClubDataType = {
  key: string;
  tag: string;
  name: string;
  logo: string;
  members: string;
  contacts: {
    ig: string;
    fb: string;
    others: string;
  },
  info: {
    activities: {
      img: string;
      imgDescription: string;
      text: string;
    },
    benefits: {
      img: string;
      imgDescription: string;
      text: string;
    },
    workings: {
      img: string;
      imgDescription: string;
      text: string;
    }
  },
  reviews: {
    count: string;
    profile: string;
    nick: string;
    gen: string;
    contact: string
    content: string;
  }[];
}
