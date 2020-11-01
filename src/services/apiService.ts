export interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

/**
 * Wraps fetch in slimFetch
 * @param request {RequestInfo} Request info
 * @param options {RequestInit} Request options
 * @returns {Promise<HttpResponse<T>>} Promise fulfilled by HttpResponse
 */
export const slimFetch = <T>(
  request: RequestInfo,
  options?: RequestInit,
): Promise<HttpResponse<T>> => {
  return new Promise((resolve, reject): void => {
    let response: HttpResponse<T>;
    fetch(request, options)
      .then((res) => {
        response = res;
        return res.clone().json();
      })
      .then((body) => {
        if (response.ok) {
          response.parsedBody = body;
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
