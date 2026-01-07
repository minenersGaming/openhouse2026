export type GiftedDataType = {
  key: string;
  tag: string;
  name: string;
  members: string;
  contacts: {
    ig: string;
    fb: string;
    others: string;
  },
  info: {
    admissions: {
      img: string;
      imgDescription: string;
      text: string;
    },
    courses: {
      img: string;
      imgDescription: string;
      text: string;
    },
    interests: {
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
