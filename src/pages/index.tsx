/* eslint-disable @typescript-eslint/indent */
import React, { ReactElement } from 'react';
import AppBar from '@src/components/AppBar';
import { Box } from 'rebass';
import IssueModel from '@src/models/IssueModel';
import IssueView from '@src/components/IssueView';
import fetchState from '@src/lib/fetchState';

const id = 'issue-1';

const Index: React.SFC = (): ReactElement => {
  const [issue, setIssue] = React.useState<IssueModel | undefined>();
  React.useEffect(fetchState<IssueModel>(`/issue/${id}`, setIssue), []);

  return (
    <Box m={0}>
      <AppBar />
      {issue && <IssueView id={issue.id} name={issue.name} description={issue.description} />}
    </Box>
  );
};

export default Index;
