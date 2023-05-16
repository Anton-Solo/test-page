export const ReviewItem = ({ txt, author }) => {
  return (
    <div className="item">
      <p className="item-txt">{txt}</p>
      <p className="item-author">{author}</p>
    </div>
  );
};
