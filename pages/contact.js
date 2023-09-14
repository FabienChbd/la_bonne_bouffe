import Layout from "../components/layout";
import { useState } from "react";
import contactStyles from "../styles/contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    mail: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Layout>
      <h2 className={contactStyles.contactTitle}>Contactez-nous</h2>
      <form className={contactStyles.contactForm} onSubmit={handleSubmit}>
        <div className={contactStyles.formGroup}>
          <label className={contactStyles.label} htmlFor="nom">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className={contactStyles.inputField}
          />
        </div>
        <div className={contactStyles.formGroup}>
          <label className={contactStyles.label} htmlFor="prenom">
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
            className={contactStyles.inputField}
          />
        </div>
        <div className={contactStyles.formGroup}>
          <label className={contactStyles.label} htmlFor="mail">
            Adresse e-mail
          </label>
          <input
            type="email"
            id="mail"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            required
            className={contactStyles.inputField}
          />
        </div>
        <div className={contactStyles.formGroup}>
          <label className={contactStyles.label} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={contactStyles.inputTA}
          />
        </div>
        <div className={contactStyles.formGroup}>
          <button type="submit" className={contactStyles.submitButton}>
            Valider
          </button>
        </div>
      </form>
    </Layout>
  );
}
