export default interface RatingModel {
  name: string;
  stars: number;
  votes: number;
  calculated?: boolean;
}
