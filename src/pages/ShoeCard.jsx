import { motion } from "framer-motion"

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
      if (bigShoeImg !== imgURL.bigShoe) {
        changeBigShoeImage(imgURL.bigShoe);
      }
    };
  
    return (
      <motion.button
        className={`border-2 rounded-xl ${
          bigShoeImg === imgURL.bigShoe
            ? "border-coral-red"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
          <img
            src={imgURL.thumbnail}
            alt='shoe colletion'
            width={127}
            height={103.34}
            className='object-contain'
          />
        </div>
        </motion.button>
    );
  };
  
  export default ShoeCard;
  