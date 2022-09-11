import React from "react";
import MemeImageRepo from "./MemeImageRepo";
import MemeTextField from "./MemeTextField";

function MemeGenerate(props){
    return (
    <div>
      <MemeTextField></MemeTextField>
        {/* <MemeTextField
            memeText={memeText}
            handleMemeTextChange={handleMemeTextChange}
        ></MemeTextField> */}
        <hr className="line-seperator"/>
        <MemeImageRepo></MemeImageRepo>
    </div>
    )
}

export default MemeGenerate;