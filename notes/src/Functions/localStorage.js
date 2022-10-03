function getId(key) {
  let id = localStorage.getItem(key + "_id");

  if (id === null) {
    id = 0;
  } else {
    id = parseInt(id);
  }
  id++;
  localStorage.setItem(key + "_id", id);
  return id;
}

function readData(key) {
  const data = localStorage.getItem(key);
  if (data === null) {
    localStorage.setItem(key, JSON.stringify([]));
    return [];
  }
  return JSON.parse(data);
}

function write(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// CRUD

export function create(key, data) {
  const oldData = readData(key);
  data.id = getId(key);
  oldData.push(data);
  write(key, oldData);
}

export function read(key) {
  return readData(key);
}

export function update(key, data, id) {
  const oldData = readData(key);
  write(
    key,
    oldData.map((row) =>
      row.id !== id ? { ...row } : { ...row, ...data, id: id }
    )
  );
}

export function destroy(key, id) {
  const oldData = readData(key);
  write(
    key,
    oldData.filter((row) => row.id !== id)
  );
}
