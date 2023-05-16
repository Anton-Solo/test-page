import "./reviews.scss";
import { ReviewItem } from "./ReviewItem";

const reviews = [
  {
    id: 1,
    author: "Dr. Jamika Burge",
    review:
      "Solis did a great job. Whether providing direct development support or giving us the opportunity to make our development updates, Solis's web design expertise and support services were top notch! It didn't take long to stand up our website, and we were pleased with the design and layout of the graphics and information. ",
  },
  {
    id: 2,
    author: "Evie-Rose Prosse",
    review:
      "Solis is a cutting edge company and knows the importance of excellence. Having been in business for 21 years, I know when I’ve found a competent professional and more importantly a company with integrity. I highly recommend this company and am available for further reference if needed.",
  },
  {
    id: 3,
    author: "Elvis Mooney",
    review:
      "I can’t say enough about how knowledgeable Toinette Rorie is in the area of Web Development. She indeed is a developer and can build a site from scratch. She understands functionality and is great at constructing a site that is robust and fully functioning. ",
  },
];

export const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews-head">
          <h3 className="reviews-title">
            Client <span>reviews</span>
          </h3>
          <span className="reviews-txt">
            Happy clients, happy us. Read our client reviews about the work
            process and results.
          </span>
        </div>
        <div className="reviews-wrap">
          {reviews.map(({ id, review, author }) => (
            <ReviewItem key={id} txt={review} author={author} />
          ))}
        </div>
      </div>
    </section>
  );
};
