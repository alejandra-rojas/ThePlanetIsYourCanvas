import React from "react";

function VoteIntro() {
  const href = window.location.pathname;

  return (
    <>
      <div className="padding-main-container">
        <div className="dottedline"></div>
        <div className="header-offset" id="vote"></div>
        <section className="vote">
          <div className="boxed-title">
            <img
              className="svg-inline"
              src="media/iconswhite/vote.svg"
              alt="icon of a thumbs up"
              srcset="media/iconswhite/vote.svg"
              height="35px"
              width="auto"
            />
            <h2>
              {href === "/" ? <b>Public Vote</b> : <b>Voto del público</b>}
            </h2>
          </div>

          <p>
            {href === "/"
              ? "Our voting widget is currently under maintenance, come back later to submit your vote. Dont worry, votes already submitted are safe!"
              : "Nuestro sistema de votación se encuentra actualmente en mantenimiento, regrese más tarde para enviar su voto. ¡No se preocupe, los votos ya enviados están seguros!"}
          </p>
        </section>
      </div>
    </>
  );
}

export default VoteIntro;
