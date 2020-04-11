import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
// import Stackedit from "stackedit-js";

// const el = document.querySelector("textarea");
// const stackedit = new Stackedit();

// // Open the iframe
// stackedit.openFile({
//   name: "Filename", // with an optional filename
//   content: {
//     text: el.value, // and the Markdown content.
//   },
// });

// // Listen to StackEdit events and apply the changes to the textarea.
// stackedit.on("fileChange", (file) => {
//   el.value = file.content.text;
// });

const HTMLInput = (props) => {
  const { classes, setInput } = props;
  return (
    <div>
      <textarea
        placeholder="Enter your markdown..."
        className={classes.inputField}
        onChange={(value) => {
          console.log(value);
          setInput(value.target.value);
        }}
      />
    </div>
  );
};
export default withStyles(styles)(HTMLInput);
