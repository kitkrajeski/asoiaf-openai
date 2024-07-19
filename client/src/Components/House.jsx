import { Typography } from "./Typography";

export default function House({ house, onFavoriteClick }) {
  //   return (
  //     <>
  //       <div className="houses--background">
  //         {/* <h1 className="houses--text primary--text--style">{house.name}</h1> */}
  //         <Typography variant="heading">{house.name}</Typography>
  //         <Typography variant="heading">{house.region}</Typography>
  //         {/* <h1 className="houses--text primary--text--style">{house.region}</h1> */}
  //         {house.words && (
  //           <h2 className="houses--text primary--text--style">{`'${house.words}'`}</h2>
  //         )}
  //         <img className=" houses--crests" src={house.crest} />
  //       </div>
  //       <button className="houses main--button" onClick={onFavoriteClick}>
  //         Add to Favorites
  //       </button>
  //     </>
  //   );
  return (
    <div className="house">
      <div className="house-header">
        <Typography variant="heading">{house.name}</Typography>
        <Typography variant="heading">{house.region}</Typography>
      </div>
      <div className="house-body">
        {house.words && (
          <Typography variant="subheader">{house.words}</Typography>
        )}
        <img className="house-crest" src={house.crest} />
      </div>
      <div className="house-footer">
        <button className="house-cta" onClick={onFavoriteClick}>
          Add to Favorites
        </button>
      </div>
    </div>
  );
}

<House
  house={{ name: "test", words: "test" }}
  onFavoriteClick={() => alert("yo")}
></House>;
