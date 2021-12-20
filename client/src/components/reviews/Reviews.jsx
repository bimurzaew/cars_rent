import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview, getReviews } from "../../redux/features/reviews";
import Box from "@material-ui/core/Box";

function Reviews() {
  const dispatch = useDispatch();

  const recall = useSelector((state) => state.reviews.recall);
  const token = useSelector((state) => state.users.token);
  const error = useSelector((state) => state.reviews.error);

  const [text, setText] = useState("");

  const addRecall = () => {
    dispatch(addReview(text));
    setText("");
  };

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <>
      <table className={"table table-striped bg-dark bg-opacity-25"}>
        <thead>
          <tr>
            <th className={"text-light text-center"} colSpan={2}>
              Отзывы клиентов
            </th>
          </tr>
          <tr>
            <th className={"text-light text-center"}>Имя клиента</th>
            <th className={"text-light text-center"}>Отзыв клиента</th>
          </tr>
        </thead>
        <tbody>
          {recall.map((comment) => {
            return (
              <tr>
                <th className={"text-light"}>{comment.userId?.name}</th>
                <td className={"text-light"}>{comment.text}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="p-lg-3 d-sm-block">
        {token && (
          <Box>
            {error && (
              <p className={"text-danger fw-bold w-50 text-center"}>{error}</p>
            )}
            <div className={"d-flex align-items-center"}>
              <input
                value={text}
                className="form-control w-50 m-2"
                placeholder="Оставьте отзыв"
                onChange={(e) => setText(e.target.value)}
              />
              <button
                className="btn btn-primary"
                onClick={addRecall}
                type={"submit"}
              >
                Добавить
              </button>
            </div>
          </Box>
        )}
      </div>
    </>
  );
}

export default Reviews;
