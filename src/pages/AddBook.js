import { useState } from 'react';
import { useAddBookMutation } from '../features/api/apiSlice';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  const [addBook, { /* data: book, */ isLoading }] = useAddBookMutation();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [featured, setFeatured] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ name, author, thumbnail, price, rating, featured });

    navigate('/');
  };

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
          <form className="book-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="space-y-2">
              <label>Book Name</label>
              <input
                required
                className="text-input"
                type="text"
                id="lws-bookName"
                name="name"
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
                onChange={(e) => setThumbnail(e.target.value)}
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
                  step="0.01"
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
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
              Add Book
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
