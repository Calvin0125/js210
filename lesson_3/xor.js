function isXor(a, b) {
  if ((!!a && !b) || (!a && !!b)) {
    return true;
  } else {
    return false;
  }
}