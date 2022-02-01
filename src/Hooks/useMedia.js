import React from "react";

const useMedia = (media) => {
  //para verificar tamanho da tela do usuário
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      //para verificar tamanho da tela do usuário
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener("resize", changeMatch);
    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
