import React from "react";
import { inject } from "mobx-react";

import Input from "../../Input/Input";

import "./_Form.module.scss";

const Form = inject("store")(({ store }) => {
  return (
    <form className="reg-modal__folders">
      <Input user={store.Registration} />
    </form>
  );
});

export default Form;
