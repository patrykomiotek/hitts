type Keys = number | string;

const myMap = new Map<Keys, string>();

myMap.set(123, "hello");
myMap.set("sth", "hello2");
// myMap.set(1, 654); // error

type MyCache = Record<Keys, string>;

const superCache = () => {
  const cache: MyCache = {};

  const add = (id: string, value: string) => {
    // add something to cache
    cache[id] = value;
  };

  const remove = (id: string) => {
    // delete form cache
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};
