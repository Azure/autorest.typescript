import { assert } from "chai";

export const responseStatusChecker = {
  onResponse: (response: any) => {
    assert.equal(response.status, 200, `Unexpected status code '${response}'.`);
  }
};

export const responseStatusChecker201 = {
  onResponse: (response: any) => {
    assert.equal(response.status, 201, `Unexpected status code '${response}'.`);
  }
};

export const responseStatusChecker202 = {
  onResponse: (response: any) => {
    assert.equal(response.status, 202, `Unexpected status code '${response}'.`);
  }
};

export const responseStatusChecker204 = {
  onResponse: (response: any) => {
    assert.equal(response.status, 204, `Unexpected status code '${response}'.`);
  }
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
