import React, { ReactElement } from 'react';
import { Box, Heading, Text, Button } from 'rebass';
import IssueComponentModel from '@src/models/IssueComponentModel';
import styled from '@emotion/styled';
import IssueComponent from './IssueComponent';

const msg = 'The Critical Components Are';

const Container = styled(Box)`
  z-index: -1;
  margin: -80px -50px;
  position: relative;
`;

const InvertedSubtitle = styled(Heading)`
  background-color: black;
  color: white;
`;

export interface IssueComponentsProps {
  components: IssueComponentModel[];
}

const IssueComponents: React.SFC<IssueComponentsProps> = (
  props: IssueComponentsProps,
): ReactElement => {
  const { components } = props;
  return (
    <Container m={4} p={3}>
      <InvertedSubtitle paddingTop={5} paddingBottom={4} px={5}>
        {msg}
      </InvertedSubtitle>
      <Box mx={5} p={3}>
        {components.map(({ id, name, description, ratings, author }, i) => (
          <IssueComponent
            key={id}
            id={id}
            number={i + 1}
            name={name}
            description={description}
            ratings={ratings}
            author={author}
          />
        ))}
      </Box>
      <Button marginLeft={5} variant="outline">
        More ...
      </Button>
    </Container>
  );
};

export default IssueComponents;
