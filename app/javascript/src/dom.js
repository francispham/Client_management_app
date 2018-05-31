function qS(query, node = document) {
  return node.querySelector(query);
}

function qSA(query, node = document) {
  return node.querySelectorAll(query);
}
export {qS, qSA};
