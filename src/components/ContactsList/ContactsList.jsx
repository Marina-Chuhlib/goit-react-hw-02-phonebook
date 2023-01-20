import css from "../ContactsList/ContactsList.module.css"

const ContactsList = ({ contacts }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <li key={id} className={css.item}>
      <p>{name}: <span className={css.number}>{number}</span> </p>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default ContactsList;
