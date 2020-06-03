import React, { ReactElement } from 'react';
import AppBar from '@src/components/AppBar';
import Issue from '@src/components/Issue';
import IssueComponents from '@src/components/IssueComponents';
import { Box } from 'rebass';
import IssueModel from '@src/models/IssueModel';
import IssueComponentModel from '@src/models/IssueComponentModel';

const issue: IssueModel = {
  name: 'Racism in the USA',
  description: 'Black America should no longer live in fear, poverty, and humiliation.',
};

const component: IssueComponentModel = {
  name: 'Institutional Violence As The Status Quo',
  description: `
"black and Hispanic drivers were searched approximately four times as 
often as white drivers, yet [the Chicago Police Department’s] own data 
show that contraband was found on white drivers twice as often as black 
and Hispanic drivers." [Police Accountability Task Force Report](https://chicagopatf.org/wp-content/uploads/2016/04/PATF_Final_Report_Executive_Summary_4_13_16-1.pdf)
    
"the probability of being black, unarmed, and shot by police 
is about 3.49 times the probability of being white, unarmed, and shot by 
police on average." [University of California Study](http://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0141854)
    `,
  ratings: [
    {
      name: 'Overall',
      stars: 3,
      votes: 2321,
      calculated: true,
    },
    {
      name: 'Critical',
      stars: 3,
      votes: 1356,
    },
    {
      name: 'Well-Researched',
      stars: 4,
      votes: 965,
    },
  ],
};

const components: IssueComponentModel[] = [
  component,
  { ...component, name: 'Economic Disparity / Oppression' },
  { ...component, name: 'Unjust Jailings for Petty Crimes' },
];

const Index: React.SFC = (): ReactElement => {
  const { name, description } = issue;
  return (
    <Box m={0}>
      <AppBar />
      <Issue name={name} description={description} />
      <IssueComponents components={components} />
    </Box>
  );
};

export default Index;
