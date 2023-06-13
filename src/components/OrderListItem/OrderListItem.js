import styles from './OrderListItem.module.scss';
import Card from 'react-bootstrap/Card';
 
export default function OrderListItem({ order, isSelected, handleSelectOrder }) {
return (
  <Card className={`${styles.OrderListItem} ${isSelected ? styles.selected : ''}`} onClick={() => handleSelectOrder(order)}>

    <div>
    <Card.Title className={styles.Smaller}>
        {new Date(order.updatedAt).toLocaleDateString()}</Card.Title>

      <Card.Subtitle>Order Id: <span className={styles.Smaller}>{order.orderId}</span></Card.Subtitle>

    </div>
    <Card.Body className={styles.AlignRt}>
      <span 
      className={styles.Smaller}>{order.totalQty} Item{order.totalQty > 1 ? 's' : ''} ${order.orderTotal.toFixed(2)} 
      </span>
    </Card.Body>
   
  </Card>
);
}