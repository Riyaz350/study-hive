
const Review = ({review}) => {
    const {question, answer} = review
    return (
        <div className="space-y-5 border-0 text-[#FFDDB6]  text-left p-5 h-[200px]  ">
            <h1 className="text-lg lg:text-3xl">Q : {question}</h1>
            <p className="text-sm lg:text-xl">A : {answer}</p>
        </div>
    );
};

export default Review;