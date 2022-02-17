import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIKEY, EMPTY_IMAGE, IMG_API, MAIN_URL } from "../../utils/constanst";


export const MovieCard = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(undefined);

  useEffect(() => {
    fetch(MAIN_URL+`/movie/${id}?api_key=` + APIKEY)
      .then((response) => response.json())
      .then((json) => {
        let temp = json;
        setUserInfo(temp);
        console.log(temp);
      });
  }, [id]);
  console.log(userInfo);
  return (
    <main>
      {`got this id: ${id},`}
      {userInfo ? (
        <div>
          <p>name:{userInfo.title}</p>
          <img
            src={
              userInfo.poster_path
                ? IMG_API + userInfo.poster_path
                : EMPTY_IMAGE
            }
            alt={"title"}
          ></img>
          <p>{userInfo.overview}</p>
        </div>
      ) : (
        <p>LOADING...</p>
      )}
    </main>
  );
};
