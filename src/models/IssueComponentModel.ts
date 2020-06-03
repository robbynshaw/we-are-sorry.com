import RatingModel from './RatingModel';

export default interface IssueComponentModel {
  name: string;
  description: string;
  ratings: RatingModel[];
}
