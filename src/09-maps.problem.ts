type Keys = number | string;

const myMap = new Map<Keys, string>(); // {}: Record + methods add, get, has, set

myMap.set(123, "hello");
myMap.set("sth", "hello2");
// myMap.set(1, 654); // error

type MyCache = Record<Keys, string>;

const superCache = () => {
  const cache: MyCache = {}; // server -> API -> frontend -> display

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
