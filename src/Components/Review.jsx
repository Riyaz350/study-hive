
const Review = ({review}) => {
    const {question, answer} = review
    return (
        <div className="space-y-5 bg-[#92140c] text-[#FFDDB6] border-black border-2 mb-5 text-left p-5 h-[200px]  lg:w-1/2 mx-auto">
            <h1 className="text-lg lg:text-3xl">{question}</h1>
            <p className="text-sm lg:text-xl">{answer}</p>
        </div>
    );
};

export default Review;