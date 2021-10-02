import createGlobalState from 'use-state-global';

let readLocalstorage = (key: string) => {
  let item = localStorage.getItem(key);
  if (!item) return undefined;
  return JSON.parse(item);
};

let writeLocalstorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

let createLocalstorageState = <T>(key: string, defaultState?: T) => {
  let internalState = createGlobalState<T>(defaultState as T);
  let initialData = readLocalstorage(key);

  if (initialData != null) {
    internalState.setState(initialData);
  } else if (defaultState !== undefined) {
    writeLocalstorage(key, internalState.getState());
  }

  let hook: any = (): [T, (v: T) => void] => {
    let [state, setState] = internalState();

    let set = (v: T) => {
      setState(v);
      writeLocalstorage(key, v);
    };

    return [state, set];
  };

  hook.getState = internalState.getState;
  hook.setState = (v: T) => {
    internalState.setState(v);
    writeLocalstorage(key, v);
  };

  return hook as {
    (): [T, (s: T) => void];
    getState: () => T;
    setState: (v: T) => void;
  };
};

export default createLocalstorageState;
