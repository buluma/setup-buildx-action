import {describe, expect, it} from '@jest/globals';
import * as github from '../src/github';

describe('github', () => {
  it('returns latest buildx GitHub release', async () => {
    const release = await github.getRelease('latest');
    expect(release).not.toBeNull();
    expect(release?.tag_name).not.toEqual('');
  });

  it('returns v0.2.2 buildx GitHub release', async () => {
    const release = await github.getRelease('v0.2.2');
    expect(release).not.toBeNull();
    expect(release?.tag_name).toEqual('v0.2.2');
  });
});
