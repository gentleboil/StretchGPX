import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember gpx', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('h1').hasText('Stretch GPX - fit your run to your truth');
  });

  test('visiting /runs', async function (assert) {
    await visit('/runs');

    assert.strictEqual(currentURL(), '/runs');
    // assert.dom('h1').hasText('Stretch GPX - fit your run to your truth');
  });
  test('visiting /walks', async function (assert) {
    await visit('/walks');

    assert.strictEqual(currentURL(), '/walks');
    //assert.dom('h1').hasText('Stretch GPX - fit your run to your truth');
  });

  test('visiting /swims', async function (assert) {
    await visit('/swims');

    assert.strictEqual(currentURL(), '/swims');
    //assert.dom('h1').hasText('Stretch GPX - fit your run to your truth');
  });
  
});
