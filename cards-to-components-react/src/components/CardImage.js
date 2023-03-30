// 2 add in the starter code for CardImage

// 23 now we need to add in props and then change the img src to be props.img
const CardImage = (props) => {
    return (
      <img
        src={props.img}
        className="card-img-top"
        alt="..."
      />
    );
  };
  
  export default CardImage;