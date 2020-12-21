export class Post {
  posterId: string | undefined;
  message: string | undefined;
  picture: string | undefined;
  video: string | undefined;
  likers: [string] | undefined;
  comments: [Object] | undefined;
}
