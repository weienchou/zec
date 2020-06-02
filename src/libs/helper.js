export default {
  isset: (ta, type) => {
    if (typeof ta === "undefined" || ta === null) {
      return false;
    } else {
      if (typeof type !== "undefined") {
        return typeof ta === type;
      } else {
        return true;
      }
    }
  }
};
