import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../features/starshipsSlice";

export const Pagination = () => {
  const dispatch = useDispatch();
  const { page, totalPages } = useSelector((state) => state.starships);
 
  const handlePrevious = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
      
    }
  };

  

  const handleNext = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };
  return (
    <div className="flex justify-center space-x-4 p-4">
      <button
        className="bg-gray-300 p-2 rounded disabled:opacity-50"
        onClick={handlePrevious}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="text-xl">{page}</span>
      <button
        className="bg-gray-300 p-2 rounded disabled:opacity-50"
        onClick={handleNext}
        disabled={page === totalPages}
      >
        Next
      </button>
      
    </div>
  )
};

 
