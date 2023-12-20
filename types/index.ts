export interface ItemPortfolio {
  data: {
    title: string;
    description: string;
    image: string;
    jobDesc: Array<string>;
    startDate: string;
    endDate: string;
    company: string;
  };
}

export type ItemsPortfolio = {
  items: ItemPortfolio[];
};
