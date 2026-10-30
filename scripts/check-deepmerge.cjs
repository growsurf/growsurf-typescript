// Check the package Jest actually resolves and its bundled UMD entry point.
const assert = require('node:assert/strict');
const path = require('node:path');

const jest = require.resolve('jest');
const jestCli = require.resolve('jest-cli', { paths: [jest] });
const jestConfig = require.resolve('jest-config', { paths: [jestCli] });
const entry = require.resolve('deepmerge', { paths: [jestConfig] });
const packageRoot = path.dirname(path.dirname(entry));

for (const file of [entry, path.join(packageRoot, 'dist/umd.js')]) {
  const merge = require(file);
  const poisoned = () => JSON.parse('{"__proto__":{"injected":true},"safe":1}');
  const nestedTarget = Object.assign(Object.create(null), { nested: poisoned() });
  const results = [
    merge(Object.create(null), poisoned()),
    merge(poisoned(), {}),
    merge({}, nestedTarget).nested,
    merge({ nested: Object.create(null) }, { nested: poisoned() }).nested,
    merge({ list: [] }, { list: [poisoned()] }).list[0],
  ];
  for (const result of results) {
    assert.equal(Object.getPrototypeOf(result), Object.prototype, file);
    assert.equal(result.injected, undefined, file);
    assert.equal(result.safe, 1, file);
  }
  assert.deepEqual(merge({ nested: { a: 1 }, list: [1] }, { nested: { b: 2 }, list: [2] }), {
    nested: { a: 1, b: 2 },
    list: [1, 2],
  });
}
console.log('deepmerge prototype protection verified for all installed entry points');
