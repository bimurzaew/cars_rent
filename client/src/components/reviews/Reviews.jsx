import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview, getReviews } from "../../redux/features/reviews";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

function Reviews(props) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const addRecall = () => {
    dispatch(addReview( text ));
  };
  console.log(text);
  useEffect(() => {
    dispatch(getReviews());
  }, []);
  const recall = useSelector((state) => state.reviews.recall);

  return (
    <>
      <form action="">
        <TextField onChange={(e) => handleChangeText(e)} type="text" />
        <Button onClick={addRecall}>some</Button>
      </form>
      <div>
        {recall?.map((item) => {
          return <div>{item.text}</div>;
        })}
      </div>
    </>
  );
}

export default Reviews;
