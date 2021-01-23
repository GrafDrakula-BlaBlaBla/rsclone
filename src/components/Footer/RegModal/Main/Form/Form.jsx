import React from "react";
import { inject } from "mobx-react";

import Input from "../../Input/Input";

import "./_Form.scss";

const Form = inject("storeRegistarion")(({ storeRegistarion }) => {
  return (
    <div className="reg-modal__folders">
      <Input user={storeRegistarion} />
    </div>
  );
});

export default Form;
