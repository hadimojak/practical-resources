const flag = true;

switch (flag) {
  case true:
    try {
      try {
        if (flag) throw new Error("prive error");
      } finally {
      }
    } catch (error) {
      throw new Error(error);
    }
  default:
    break;
}
