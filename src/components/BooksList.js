import { useSelector } from 'react-redux';
import { useGetBooksQuery } from '../features/api/apiSlice';
import BookItem from './BookItem';

export default function BooksList() {
  const { data: books, isLoading, isError, error } = useGetBooksQuery();
  const { filter, searchTerm } = useSelector((state) => state.filter);

  let content = null;
  if (isLoading) content = <div>Loading...</div>;
  if (!isLoading && isError) content = <div>{error}</div>;
  if (!isLoading && !isError && books?.length === 0)
    content = <div>No Books Found!</div>;

  if (!isLoading && !isError && books?.length > 0) {
    // if only filter present
    if (filter === 'featured')
      content = books
        .filter((book) => book.featured)
        .map((book) => <BookItem key={book.id} book={book} />);
    // if only searchTerm present
    if (filter === 'all' && searchTerm)
      content = books
        .filter((book) =>
          book.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((book) => <BookItem key={book.id} book={book} />);
    // if filter & searchTerm both are present
    if (filter === 'featured' && searchTerm)
      content = books
        .filter((book) => book.featured)
        .filter((book) =>
          book.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((book) => <BookItem key={book.id} book={book} />);
    // if neither filter or searchTerm is present
    if (filter === 'all' && !searchTerm)
      content = books.map((book) => <BookItem key={book.id} book={book} />);
  }

  return content;
}
