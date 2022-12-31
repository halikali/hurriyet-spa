import { months } from "./data";

const utf8ToEnglish = (word: string | undefined) => {
  let convertedWord = "";

  if (typeof word === "undefined") return false;

  const letters: any = {
    ğ: "g",
    ü: "u",
    ş: "s",
    ö: "o",
    ç: "c",
  };

  for (let i = 0; i < word!.length; i++) {
    Object.keys(letters).some((elem) => elem == word?.charAt(i))
      ? (convertedWord += letters[word!.charAt(i)])
      : (convertedWord += word!.charAt(i));
  }
  return convertedWord;
};

const calculateAncestor = (ancestor: string | undefined): string => {
  if (ancestor === "galeri") return "/galeri";
  else return "";
};

const parseToArray = (tags: string) => {
  return tags?.split(",");
};

const convertTimeToHumanReadable = (
  time: string = "2022-12-25T20:11:34.791Z"
) => {
  const splitted = time.split("T");
  const hourAndMimute = splitted[1].split(":").slice(0, -1);
  const date = splitted[0].split("-");

  return `${months[date[1]]} ${date[2]}, ${date[0]} ${hourAndMimute.join(":")}`;
};

export {
  utf8ToEnglish,
  calculateAncestor,
  parseToArray,
  convertTimeToHumanReadable,
};
