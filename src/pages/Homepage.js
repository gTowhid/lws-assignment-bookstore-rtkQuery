import BooksList from '../components/BooksList';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { filterSelected } from '../features/filter/filterSlice';

export default function Homepage() {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.filter);

  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button
              className={
                filter === 'all'
                  ? 'lws-filter-btn active-filter'
                  : 'lws-filter-btn'
              }
              onClick={() => dispatch(filterSelected('all'))}
            >
              All
            </button>
            <button
              className={
                filter === 'featured'
                  ? 'lws-filter-btn active-filter'
                  : 'lws-filter-btn'
              }
              onClick={() => dispatch(filterSelected('featured'))}
            >
              Featured
            </button>
          </div>
        </div>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          <BooksList />
        </div>
      </div>
    </main>
  );
}
