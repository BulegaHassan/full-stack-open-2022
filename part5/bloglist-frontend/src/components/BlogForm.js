const BlogForm = ({onSubmit,handleTitleChange,handleAuthorChange,handleUrlChange,title,author,url}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>create new</h1>
        <div>
          title:
          <input
            type='text'
            id='title'
            name='title'
            value={title}
            autoComplete='off'
            onChange={handleTitleChange}
          />
        </div>
        <div>
          author:
          <input
            type='text'
            id='author'
            name='author'
            value={author}
            autoComplete='off'
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          url:
          <input
            type='text'
            id='url'
            name='url'
            value={url}
            autoComplete='off'
            onChange={handleUrlChange}
          />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
}
export default BlogForm