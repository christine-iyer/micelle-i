import styles from './OrderDetail.module.scss'
import LineItem from '../LineItem/LineItem';


// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  const lineItems = order.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  );

  return (
    <div className={styles.OrderDetail}>
      <div className={styles.SectionHeading}>
        {order.isPaid ?
          <span>ORDER <span className={styles.Smaller}>{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col">
        {lineItems.length ?
          <>
            {lineItems}
            <section className={styles.Total}>
              {order.isPaid ?
                <span className={styles.Right}>TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className={styles.BtnSm}
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className={styles.Right}>${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className={styles.Hungry}>Hungry?</div>
        }
      </div>
    </div>
  );
}