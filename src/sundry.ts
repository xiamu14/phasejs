export const sleep = (timeout = 300) => {
  return new Promise((r) => {
    setTimeout(r, timeout);
  });
};

export function uniqueId() {
  return (
    Math.random().toString(36).substring(2) + new Date().getTime().toString(36)
  );
}

//
export function random({ min, max }: { min: number; max: number }) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function compareVersion(versionA: string, versionB: string) {
  const partsA = versionA.split(".");
  const partsB = versionB.split(".");

  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const partA = parseInt(partsA[i] || "0", 10);
    const partB = parseInt(partsB[i] || "0", 10);

    if (partA > partB) {
      return 1;
    } else if (partA < partB) {
      return -1;
    }
  }

  return 0;
}
