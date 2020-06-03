import fetch from './fetch';

const fetchState = <TModel>(relPath: string, setter: (model: TModel) => void): (() => void) => {
  return (): void => {
    const doWork = async (): Promise<void> => {
      const resp = await fetch(relPath);
      const model = await resp.json<TModel>();
      if (model != null) {
        setter(model);
      }
    };
    doWork();
  };
};

export default fetchState;
