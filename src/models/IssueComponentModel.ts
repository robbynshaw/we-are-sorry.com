import RatingModel from './RatingModel';
import AuthorModel from './AuthorModel';

export default interface IssueComponentModel {
  id: string;
  name: string;
  description: string;
  ratings: RatingModel[];
  author: AuthorModel;
}
