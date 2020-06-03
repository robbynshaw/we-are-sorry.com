import issue from '@src/mocks/issue.json';
import components from '@src/mocks/issueComponents.json';
import comments from '@src/mocks/comments.json';

class LocalResponse {
  private relPath: string;

  constructor(relPath: string) {
    this.relPath = relPath;
  }

  async json<TModel>(): Promise<TModel | null> {
    const storage = window.localStorage;
    const result = storage.getItem(this.relPath);
    if (result) {
      return new Promise(res => res(JSON.parse(result)));
    }
    return new Promise(res => res(null));
  }
}

const init = (): void => {
  const storage = window.localStorage;
  if (!storage.getItem('we-are-sorry::init')) {
    storage.setItem('/issue/issue-1', JSON.stringify(issue));
    storage.setItem('/issue/issue-1/components', JSON.stringify(components));
    storage.setItem('/component/comp-1/comments', JSON.stringify(comments));
  }
};

const fetch = <TModel>(relPath: string): Promise<LocalResponse> => {
  init();
  return new Promise(res => res(new LocalResponse(relPath)));
};

export default fetch;
