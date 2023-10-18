import { IReview } from "./reviewsType";

export type IServiceTypes = {
  serviceId?: string;
  serviceName: string;
  description: string;
  serviceImage: string | any;
  servicePrice: number;
  location: string;
  serviceStatus: string;
  category?: ICategoryTypes;
  reviewAndRatings?: IReview[];
};

export type ICategoryTypes = {
  categoryName: string;
  description: string;
  services?: IServiceTypes[];
};
