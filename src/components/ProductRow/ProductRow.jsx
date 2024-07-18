import styles from "./ProductRow.module.css";

export default function ProductRow({ product }) {
  const { name, price, stocked } = product;

  return (
    <tr>
      <td className={`${stocked ? "" : styles["heading-red"]}`}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
