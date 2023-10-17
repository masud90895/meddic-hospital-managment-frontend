export type IReview = {
  reviewId: string;
  reviewComment: string;
  reviewRating: string;
  createdAt?: string;
  service?: {
    serviceName: string;
    serviceId: string;
  };
  profile?: {
    firstName: string;
    lastName: string;
    profileId: string;
    profileImage: string;
  };
};
