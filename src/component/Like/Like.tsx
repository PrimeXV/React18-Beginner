import styles from "./Like.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggle = () => {
    setIsClicked(!isClicked);
    onClick();
  };

  return isClicked ? (
    <AiFillHeart
      className={[styles.btn, styles.color].join(" ")}
      onClick={toggle}
    />
  ) : (
    <AiOutlineHeart className={styles.btn} onClick={toggle} />
  );
};
export default Like;
