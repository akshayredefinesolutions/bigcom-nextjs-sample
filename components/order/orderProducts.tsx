import { useEffect, useState } from 'react'
import useCustomer from '@framework/customer/use-customer'
import Image from 'next/image'
import { Bag } from '@components/icons'

import useAddItem from '@framework/cart/use-add-item'
import { useUI } from '@components/ui'
import style from './orderProduct.module.css'

const OrderProductCompo = () => {
  const [products, setProducts] = useState([])
  const [Qty, setQty] = useState(1)

  const { data: customer } = useCustomer()
  const { openModal, setModalView } = useUI()

  const addItem = useAddItem()

  useEffect(() => {
    let cid = customer?.entityId
    if (customer && customer?.entityId) {
      fetch(
        'https://www.ystore.us/sleekshop/getOrderProducts.php?customer_id=' +
          cid
      )
        .then((res) => res.json())
        .then((orderProducts) => {
          setProducts(orderProducts)
        })
    } else {
      setModalView('LOGIN_VIEW')
      return openModal()
    }
  }, [customer])

  return (
    <>
      <ul className="account-list">
        {Array.isArray(products) && products.length > 0 ? (
          <>
            {products.map((product: any) => {
              let productQuantity = product?.quantity || 0

              return (
                <li className="account-listItem">
                  <div className="account-product">
                    <figure className="account-product-figure">
                      <Image
                        width="100"
                        height="100"
                        src={product?.prod_image[0]?.data[0]?.url_standard}
                      ></Image>
                      <span
                        className="purchased-title"
                        style={{ color: 'white' }}
                      >
                        Last Purchased
                      </span>
                      <span
                        className="purchased-date"
                        style={{ color: 'white' }}
                      >
                        {product?.last_purchased}
                      </span>
                    </figure>
                    <div className="account-product-body">
                      <div className="account-product-body-part">
                        <a href="#">
                          <h5 className="account-product-title">
                            {product?.name}
                          </h5>

                          <span
                            className="variant-name"
                            style={{ paddingLeft: '185px' }}
                          >
                            {product?.product_options[0]?.display_value}
                          </span>
                          <span className="variant-sku">{product?.sku}</span>
                        </a>
                      </div>

                      <div className={`account-product-body-part `}>
                        <div className={`${style.incrementParent}`}>
                          <button
                            className={`${style.decrementBtn}`}
                            onClick={() => {
                              Qty >= 1 && setQty(Qty - 1)
                            }}
                          >
                            -
                          </button>
                          <input
                            disabled
                            className={`${style.inputEDCartVal}`}
                            value={Qty}
                          />
                          <button
                            className={` ${style.incrementBtn} `}
                            onClick={() => {
                              productQuantity >= Qty && setQty(Qty + 1)
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className={`${style.AddToCartParent}`}>
                        <div
                          className={`account-product-body-part ${style.crtChildOne}`}
                        >
                          {/* {console.log('Product all data ==> ', product)} */}

                          <div
                            className="account-product-price"
                            style={{ width: '105px' }}
                          >
                            $ {product?.prod_price}
                          </div>
                        </div>

                        <div
                          className={`${style.add_to_cart_but} add-to-cart-but`}
                        >
                          <div className="form-action">
                            {productQuantity > 0 ? (
                              <h6
                                className={`account-orderStatus-label cursor-pointer ${style.account_orderStatus_label}`}
                                onClick={async () => {
                                  let productId = product.product_id
                                  let variantId = product.variant_id
                                  await addItem({
                                    productId,
                                    variantId,
                                    quantity: Qty,
                                  })
                                }}
                              >
                                Add to Cart
                              </h6>
                            ) : (
                              <h6 className="account-orderStatus-label cursor-pointer">
                                Out Of Stock
                              </h6>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </>
        ) : (
          <>
            <div className="flex-1 p-24 flex flex-col justify-center items-center ">
              <span className="border border-dashed border-secondary rounded-full flex items-center justify-center w-16 h-16 p-12 bg-primary text-primary">
                <Bag className="absolute" />
              </span>
              <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
                No Products found
              </h2>
            </div>
          </>
        )}
      </ul>
    </>
  )
}

export default OrderProductCompo
