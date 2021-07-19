import { assert } from "chai";

export function check(code: number) {
  return (response: any) =>
    assert.equal(
      response.status,
      code,
      `Unexpected status code '${response}'.`
    );
}

export function check200(response: any) {
  return check(200);
}

export function check201(response: any) {
  return check(201);
}

export function check202(response: any) {
  return check(202);
}

export function check204(response: any) {
  return check(204);
}

export const responseStatusChecker = {
  onResponse: check200
};

export const responseStatusChecker201 = {
  onResponse: check201
};

export const responseStatusChecker202 = {
  onResponse: check202
};

export const responseStatusChecker204 = {
  onResponse: check204
};

export const responseStatusChecker301 = {
  onResponse: (response: any) => {
    assert.equal(response.status, 301, `Unexpected status code '${response}'.`);
  }
};

export const responseStatusChecker302 = {
  onResponse: (response: any) => {
    assert.equal(response.status, 302, `Unexpected status code '${response}'.`);
  }
};

export const responseStatusChecker404 = {
  onResponse: (response: any) => {
    assert.equal(response.status, 404, `Unexpected status code '${response}'.`);
  }
};
