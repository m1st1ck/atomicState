import { atom, httpAtom } from "./atom";

export const testAtom = atom(
  {
    count: 0,
    name: 0
  },
  "test"
);

testAtom.setState({ count: 2 });

export const testReqAtom = httpAtom(
  {
    count: 0
  },
  "httpTest"
);
