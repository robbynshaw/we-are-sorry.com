import React, { ReactElement } from 'react';
import CommentModel from '@src/models/CommentModel';
import { Box, Text } from 'rebass';
import fetchState from '@src/lib/fetchState';
import Comment from './Comment';

export interface DiscussionProps {
  itemType: string;
  itemId: string;
}

const Discussion: React.SFC<DiscussionProps> = (props: DiscussionProps): ReactElement => {
  const { itemType, itemId } = props;
  const [comments, setComments] = React.useState<CommentModel[]>([]);
  React.useEffect(fetchState(`/${itemType}/${itemId}/comments`, setComments), [itemType, itemId]);

  return (
    <Box m={4} p={3}>
      <Box mx={5} p={3}>
        {comments &&
          comments.map(({ id, message, author, ratings }, i) => (
            <Comment
              key={id}
              id={id}
              number={i + 1}
              message={message}
              author={author}
              ratings={ratings}
            />
          ))}
      </Box>
      <Box variant="lightBorder" mx={5} p={3}>
        <Text fontFamily="body">Click for more discussion [TODO]</Text>
      </Box>
    </Box>
  );
};

export default Discussion;
