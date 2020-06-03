/* eslint-disable @typescript-eslint/indent */
import React, { ReactElement, ReactFragment, ReactNode } from 'react';
import Issue from '@src/components/Issue';
import IssueComponents from '@src/components/IssueComponents';
import IssueComponentModel from '@src/models/IssueComponentModel';
import IssueModel from '@src/models/IssueModel';
import fetchState from '@src/lib/fetchState';

const IssueView: React.SFC<IssueModel> = (props: IssueModel): ReactElement => {
  const { id, name, description } = props;

  const [components, setComponents] = React.useState<IssueComponentModel[] | undefined>();
  React.useEffect(fetchState<IssueComponentModel[]>(`/issue/${id}/components`, setComponents), []);

  return (
    <div>
      <Issue id={id} name={name} description={description} />
      {components && <IssueComponents components={components} />}
    </div>
  );
};

export default IssueView;
