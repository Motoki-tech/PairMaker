import React from "react";
import Form from "react-bootstrap/Form"; 


const InputSheetId = (props) => {
  return (
    <>
      <Form.Group className="mb-3 w-50 mt-5" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={1} onChange={(e) => {
          //テキストエリアのsheetIDを取得
          props.setSheetId(e.target.value);
        }}
        placeholder="Enter the Google Sheet ID"/>
      </Form.Group>
    </>
  );
};

export default InputSheetId;
