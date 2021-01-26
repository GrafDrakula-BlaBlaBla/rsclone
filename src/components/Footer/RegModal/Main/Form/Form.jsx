import React from "react";
import { inject } from "mobx-react";

import Input from "../../Input/Input";

import "./_Form.scss";

const Form = inject("store")(({ store }) => {
  return (
    <div className="reg-modal__folders">
      <Input user={store.Registration} />
    </div>
  );
});

export default Form;
