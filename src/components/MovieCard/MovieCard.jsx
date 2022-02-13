import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const url = `https://api.themoviedb.org/3`;
const IMG_API = "https://image.tmdb.org/t/p/w300";

export const MovieCard = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(undefined);

  useEffect(() => {
    fetch(
      url +
        `/movie/${id}?api_key=9eff04d46f577f54aa4be3150957e4b5&language=en-US`
    )
      .then((response) => response.json())
      .then((json) => {
        let temp = json;
        setUserInfo(temp);
        console.log(temp);
      });
  }, [id]);
  console.log(userInfo);
  return (
    <div>
      {`got this id: ${id},`}
      {userInfo ? (
        <div>
          <p>name:{userInfo.title}</p>
          <img
            src={
              userInfo.poster_path
                ? IMG_API + userInfo.poster_path
                : "https://media.istockphoto.com/photos/japanese-family-taking-picture-at-tofukuji-temple-kyoto-picture-id629388592?k=20&m=629388592&s=612x612&w=0&h=cfWl3ds8i4UtqtXeRp4_Wg830gXciEfT__JAjD0yMo4="
            }
            alt={"title"}
          ></img>
          <p>{userInfo.overview}</p>
        </div>
      ) : (
        <p>LOADING...</p>
      )}
    </div>
  );
};
