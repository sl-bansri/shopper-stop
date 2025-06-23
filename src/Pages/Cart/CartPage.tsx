import { useEffect, useMemo, useState } from "react";
import {
  getCart,
  getCartLength,
  removeFromCart,
  updateQuantity,
  type CartItem,
} from "../../utils/cart";
import { useCart } from "../../Context/CartContext";
import CheckOut from "../CheckOut";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import SectionHeading from "../../components/SectionHeading";
import ItemHeading from "../../components/ItemHeading";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(getCart());
  const { setCartLength } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const handleRemove = (cartId: number) => {
    removeFromCart(cartId);
    setCartLength(getCartLength());
    setCartItems(getCart());
  };

  const handleQuantityChange = (id: string, qty: number, size: string) => {
    if (qty < 1 || qty > 10) return;
    updateQuantity(id, qty, size);
    setCartItems(getCart());
    setCartLength(getCartLength());
  };

  const totalPrice = useMemo(
    () =>
      cartItems.reduce((acc, item) => acc + item.sizePrice * item.quantity, 0),
    [cartItems]
  );
  
  return (
    <section className="w-full ">
      <div className="mx-auto sm:px-6 lg:px-8 ">
        <div className="mx-w-2xl  flex flex-col items-center mx-auto p-4 ">
          <div className="flex w-full gap-8 ">
            <div className="flex w-full">
              {showCheckout ? (
                <CheckOut totalPrice={totalPrice / 2} />
              ) : cartItems.length === 0 ? (
                <div className=" mx-auto  justify-center flex flex-col  md:px-0 ">
                  <img
                    src="/src/assets/Images/bag_1_80158fc33b.png"
                    className="w-15 self-center"
                  />
                  <div className="text-base md:text-lg lg:text-xl mt-12 text-center font-medium  text-black xl:text-xl select-none md:select-text">
                    Your Bag Feels Too Light!
                  </div>
                  <div className="text-sm md:text-base w-80 lg:text-lg font-normal mt-3 text-center  text-neutral-600 xl:text-base select-none md:select-text">
                    Looks like your bag is empty. Fill it with things that make
                    you feel stylish.
                  </div>
                  <Link to={"/category"}>
                    <button className="inline-flex items-center justify-center w-full text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-black shadow text-white px-4 py-2 font-medium rounded-sm gap-0  mt-10 h-10  md:h-12 md:w-full ">
                      <p className="font-medium uppercase tracking-sm text-xs md:text-sm lg:text-base">
                        GET SHOPPING
                      </p>
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="w-full flex flex-col justify-center">
                  <SectionHeading
                    variant="primary"
                    size="large"
                    className="font-sans text-center"
                  >
                    Your Cart
                  </SectionHeading>
                  <div className="gap-4 flex mx-auto flex-col sm:flex-row ">
                    <div className="flex flex-col gap-4  mx-auto">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-4 mx-auto items-center border p-4 rounded-md shadow "
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 bg-cover"
                          />
                          <div className="flex-1">
                            <ItemHeading variant="primary" size="medium">
                              {item.name}
                            </ItemHeading>
                            <div
                              className="flex  flex-col w-full justify-between md:flex-col  lg:flex-row lg:gap-14 lg:justify-start
                            sm:flex-col"
                            >
                              <div className="flex gap-1">
                                <div className="font-medium">Price:</div>
                                <div>₹{item.sizePrice}</div>
                              </div>
                              <div className="flex gap-1">
                                <p className="font-medium">Total Price:</p>
                                <p>₹{item.sizePrice * item.quantity}</p>
                              </div>
                            </div>
                            {item.selectedSize && (
                              <div className="flex gap-1">
                                <div className="font-medium">Size: </div>
                                <div>{item.selectedSize}</div>
                              </div>
                            )}

                            <div className="flex items-center gap-2 mt-2">
                              <button
                                className="bg-[#d8d6d63f] hover:bg-[#050505cb] hover:text-[#ffff] p-1 w-7 rounded-full"
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity - 1,
                                    item.selectedSize
                                  )
                                }
                              >
                                -
                              </button>
                              <input
                                type="number"
                                value={item.quantity}
                                className="w-12 text-center border rounded"
                                onChange={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity,
                                    item.selectedSize
                                  )
                                }
                              />
                              <button
                                className="bg-[#d8d6d63f] hover:bg-[#050505cb] hover:text-[#ffff] p-1 w-7 rounded-full"
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity + 1,
                                    item.selectedSize
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <Button
                            onClick={() => handleRemove(item.cartId)}
                            variant="cross"
                            size="large"
                          >
                            x
                          </Button>
                        </div>
                      ))}
                    </div>

                    <div>
                      <div className="flex items-center justify-between rounded-t-sm border px-6 py-3">
                        <div className="text-xs font-bold uppercase text-neutral-900 md:text-base md:font-medium">
                          Price Detail
                        </div>
                      </div>
                      <div className="xs:border-1 border-x xs:border-divider">
                        <div className="flex items-center justify-between px-4 py-3 md:px-6">
                          <ItemHeading variant="secondary" size="small">
                            Total Item
                          </ItemHeading>
                          <div className="text-xs font-medium">
                            {getCartLength()}
                          </div>
                        </div>

                        <div className="h-px w-full border-t border-dashed my-2"></div>

                        <div className="flex items-center justify-between px-4 py-1 md:px-6">
                          <ItemHeading variant="secondary" size="small">
                            Total Price
                          </ItemHeading>
                          <div className="text-xs font-medium">
                            ₹{totalPrice}
                          </div>
                        </div>

                        <div className="flex items-center justify-between bg-burntCoralLight mt-1.5 px-4 py-2 md:px-6">
                          <div className="text-xs font-medium text-red-700">
                            Your Total Savings
                          </div>
                          <div className="text-xs font-medium text-red-700">
                            50%
                          </div>
                        </div>

                        <div className="h-px w-full border-t border-divider my-2"></div>

                        <div className="flex items-center justify-between px-4 py-2 md:px-6">
                          <ItemHeading variant="secondary" size="small">
                            Delivery Fee
                          </ItemHeading>
                          <div className="text-xs font-medium">free</div>
                        </div>

                        <div className="bg-[#f5d6ea88] p-3 my-2 px-4 py-1 md:px-6">
                          <div className="text-sm font-medium text-neutral-900">
                            TIP: Shop for ₹599.50 or more for free delivery.
                          </div>
                        </div>

                        <div className="flex items-center justify-between border px-4 py-3 md:px-6">
                          <div className="text-sm font-medium text-blackSS">
                            Total Payable amount
                          </div>
                          <div className="text-sm font-bold text-blackSS">
                            ₹ {totalPrice / 2}
                          </div>
                        </div>

                        <button
                          onClick={() => setShowCheckout(true)}
                          className="inline-flex items-center justify-center bg-black text-white h-9 px-1 font-medium rounded-sm my-3 w-full md:min-h-[40px]"
                        >
                          <p className="text-xs uppercase md:text-base font-medium">
                            {showCheckout ? (
                              <>
                                <p className="opacity-30 ">continue</p>
                              </>
                            ) : (
                              " Place Order"
                            )}
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
