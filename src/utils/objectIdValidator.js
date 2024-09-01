const objectIdRegex = /^[a-f\d]{24}$/i;
const isValidObjectId = (id) => objectIdRegex.test(id);

export { isValidObjectId };
