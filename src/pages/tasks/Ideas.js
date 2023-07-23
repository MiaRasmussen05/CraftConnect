import React from "react";
import appStyles from "../../App.module.css";

const Ideas = (props) => {
  const { title} = props;

  return (
    <div>
        <p className={`${appStyles.Content} px-3 py-2 m-0`}>
          {title}
      </p>
    </div>
  );
};

export default Ideas;