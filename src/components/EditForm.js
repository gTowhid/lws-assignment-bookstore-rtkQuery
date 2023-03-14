import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEditBookMutation } from '../features/api/apiSlice';

export default function EditForm({ book }) {
  const {
    name: oldName,
    author: oldAuthor,
    thumbnail: oldThumbnail,
    price: oldPrice,
    rating: oldRating,
    featured: oldFeatured,
    id,
  } = book;
  const navigate = useNavigate();
  const [editBook, { /* data: editedBook, */ isLoading }] =
    useEditBookMutation();

  const [name, setName] = useState(oldName);
  const [author, setAuthor] = useState(oldAuthor);
  const [thumbnail, setThumnail] = useState(oldThumbnail);
  const [price, setPrice] = useState(oldPrice);
  const [rating, setRating] = useState(oldRating);
  const [featured, setFeatured] = useState(oldFeatured);

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook({
      id,
      data: { name, author, thumbnail, price, rating, featured },
    });

    navigate('/');
  };

  return (
    <form className="book-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="space-y-2">
        <label>Book Name</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-bookName"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label>Author</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label>Image Url</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-thumbnail"
          name="thumbnail"
          value={thumbnail}
          onChange={(e) => setThumnail(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label>Price</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-price"
            name="price"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
        </div>

        <div className="space-y-2">
          <label>Rating</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-rating"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="lws-featured"
          type="checkbox"
          name="featured"
          className="w-4 h-4"
          checked={featured}
          onClick={(e) => setFeatured(e.target.checked)}
        />
        <label className="ml-2 text-sm"> This is a featured book </label>
      </div>

      <button
        disabled={isLoading}
        type="submit"
        className="submit"
        id="lws-submit"
      >
        Edit Book
      </button>
    </form>
  );
}
