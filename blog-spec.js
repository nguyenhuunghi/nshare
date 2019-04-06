describe('MEAN Blog', function () {
  it ('if the test MEAN blog', function () {
    brower.get('http://localhost:8080');
    element(by.model('bloglist')).sendKeys('this is a blog post');
    element(by.css('[value="add"]')).click();
    var blogList = element.all(by.repeater('blog in blogs'));
    expect(blogList.count()).toEqual(3);
    expect(blogList.get()).getText().toEqual('this is a blog post');
  });
}); 