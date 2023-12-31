type Status = "idle" | "pending" | "finally";

const statusObject: Record<string, Status> = {};
const requestPromise: Record<string, unknown> = {};

export default function sessionCache<Res>(
  key: string,
  request: () => Promise<Res>
): (params?: { debug?: boolean }) => Promise<Res | undefined> {
  if (!(key in statusObject)) {
    statusObject[key] = "idle";
  }

  const debugId = Date.now().toString(36);

  return async (params) => {
    const debug = params?.debug;
    debug &&
      console.log(
        "%c ors 0",
        "color:white;background: #18a0f1;padding:4px",
        debugId,
        statusObject[key]
      );
    const data = sessionStorage.getItem(`ors-${key}`);
    if (data) {
      debug &&
        console.log(
          "%c ors 1",
          "color:white;background: #18a0f1;padding:4px",
          debugId,
          statusObject[key]
        );

      return Promise.resolve(JSON.parse(data));
    } else {
      if (statusObject[key] === "pending") {
        debug &&
          console.log(
            "%c ors 3",
            "color:white;background: #18a0f1;padding:4px",
            debugId,
            statusObject[key]
          );
        return requestPromise[key] as Promise<Res>;
      } else {
        debug &&
          console.log(
            "%c ors 2",
            "color:white;background: #18a0f1;padding:4px",
            debugId,
            statusObject[key]
          );
        requestPromise[key] = new Promise<Res>((resolve) => {
          request().then((data) => {
            statusObject[key] = "finally";
            debug &&
              console.log(
                "%c ors 2.1",
                "color:white;background: #18a0f1;padding:4px",
                debugId,
                statusObject[key]
              );
            delete requestPromise[key];
            delete statusObject[key];
            sessionStorage.setItem(`ors-${key}`, JSON.stringify(data));
            // 设置缓存
            resolve(data);
          });
        });
        statusObject[key] = "pending";
        return requestPromise[key];
      }
    }
  };
}
