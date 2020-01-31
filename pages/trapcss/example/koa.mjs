const context = require('../helpers/context');
const Koa = require('../..');

describe('ctx.redirect(url)', () => {
  it('should redirect to the given url', () => {
    const ctx = context();
    ctx.redirect('http://google.com');
    assert.equal(ctx.response.header.location, 'http://google.com');
    assert.equal(ctx.status, 302);
  });

  it('should escape the url', () => {
    const ctx = context();
    let url = '<script>';
    ctx.header.accept = 'text/html';
    ctx.redirect(url);
    url = escape(url);
    assert.equal(ctx.response.header['content-type'], 'text/html; charset=utf-8');
    assert.equal(ctx.body, `Redirecting to <a href="${url}">${url}</a>.`);
  });
})

function escape(html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}