import styles from './MenuListItem.module.scss'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <Card className="MenuListItem">
      
        <Card.Title>{menuItem.name}</Card.Title>
        
      <div className={styles.EmojiFlexCtrCtr}>
        
        <Card.Img src={menuItem.emoji}></Card.Img>
        </div>
        <Card.Body>
      {/* <div className={styles.Name}>{menuItem.name}</div> */}
      <div className="buy">
        <span>${menuItem.price.toFixed(2)}</span>
        <button className={styles.BtnSm} onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button>
      </div>
      </Card.Body>
    </Card>
  );
}