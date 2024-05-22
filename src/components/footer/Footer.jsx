import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import "/src/components/footer/footer.css";

function Footer() {
  const [state, handleSubmit] = useForm("xpzveawr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      <form id="contacto" onSubmit={handleSubmit}>
        <div className="input_container">
          <div className="email_input">
            <label className="email" htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea id="message" name="message" placeholder="Escribeme...." />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button className="btn" type="submit" disabled={state.submitting}>
            Enviar
          </button>
        </div>
        <div className="carlos_mail">
          <p>carlos_360@outlook.es</p>
        </div>
      </form>
    </>
  );
}

export default Footer;
