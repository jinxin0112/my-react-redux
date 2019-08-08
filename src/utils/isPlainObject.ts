const isPlainObject = (obj: object): boolean => {
  if (typeof obj !== 'object' || obj === null) return false;

  let proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return proto === Object.getPrototypeOf(obj);
};

export default isPlainObject