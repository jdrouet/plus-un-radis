export const get = function(url: string): Promise<any> {
  return fetch(url).then((res) => {
    if (res.status >= 200 && res.status < 400) {
      return res.json();
    }
    throw new Error(res.statusText);
  });
};
