import AuthorModel from './AuthorModel';
import RatingModel from './RatingModel';

export default interface CommentModel {
  id: string;
  message: string;
  author: AuthorModel;
  ratings: RatingModel[];
}
